const axios = require("axios");
const fetch = require("node-fetch");
const contentful = require("contentful");
const contentful_management = require("contentful-management");
const path = require("path");
const {
  SPACE_ID,
  TOKEN,
  ENTRY_ID,
  BASE_URL,
  PREVIEW_TOKEN,
  PREVIEW_URL,
  MANAGEMENT_URL,
  MANAGEMENT_TOKEN,
} = require("../constants");

const mainController = {
  index: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/index.html"));
  },
  getEntries: async (req, res) => {
    const response = await fetch(
      `${BASE_URL}/spaces/${SPACE_ID}/environments/master/entries?access_token=${TOKEN}`
    );
    const data = await response.json();
    res.json(data);
  },
  getEntryById: async (req, res) => {
    const resp = await axios.get(
      `${BASE_URL}/spaces/${SPACE_ID}/environments/master/entries/${ENTRY_ID}?access_token=${TOKEN}`
    );
    res.json(resp.data);
  },
  getAllEntries: async (req, res) => {
    const response = await fetch(
      `${PREVIEW_URL}/spaces/${SPACE_ID}/environments/master/entries?access_token=${PREVIEW_TOKEN}`
    );
    const data = await response.json();
    res.json(data);
  },
  getDraftEntryById: async (req, res) => {
    const response = await fetch(
      `${PREVIEW_URL}/spaces/${SPACE_ID}/environments/master/entries/${req.params.id}?access_token=${PREVIEW_TOKEN}`
    );
    const data = await response.json();
    res.json(data);
  },
  filterDraftEntries: async (req, res) => {
    const response = await fetch(
      `${PREVIEW_URL}/spaces/${SPACE_ID}/environments/master/entries?access_token=${PREVIEW_TOKEN}`
    );
    const data = await response.json();
    const filteredDrafts = data.items.filter(
      (entry) => entry.sys.revision === 0
    );
    console.log(filteredDrafts);
    res.json(filteredDrafts);
  },
  getEntriesWithContentful: async (req, res) => {
    const client = contentful.createClient({
      space: SPACE_ID,
      accessToken: PREVIEW_TOKEN,
      host: "preview.contentful.com",
    });
    try {
      const entries = await client.getEntries();
      return res.json(entries);
    } catch (e) {
      console.log(e);
      res.send(e);
    }
  },
  getEntriesWithContentfulManagement: async (req, res) => {
    const client = contentful_management.createClient({
      accessToken: MANAGEMENT_TOKEN,
    });
    client
      .getSpace("zofd9a155suz")
      .then((space) => space.getEnvironment("master"))
      .then((environment) => environment.getEntries())
      .then((response) => {
        res.json(response);
      })
      .catch(console.error);
  },
  updateEntry: async (req, res) => {
    const client = contentful_management.createClient({
      accessToken: MANAGEMENT_TOKEN,
    });
    client
      .getSpace(SPACE_ID)
      .then((space) => space.getEnvironment("master"))
      .then((environment) => environment.getEntry("2PbNb2Tv3FUgoTXenvttuJ"))
      .then((entry) => {
        entry.fields.name["en-US"] = "Volver al futuro II";
        return entry.update();
      })
      .then((entry) => {
        res.send(`Entry ${entry.sys.id} updated.`);
      })
      .catch(console.error);
  },
  updateAsyncEntry: async (req, res) => {
    const client = contentful_management.createClient({
      accessToken: MANAGEMENT_TOKEN,
    });
    const space = await client.getSpace(SPACE_ID);
    const env = await space.getEnvironment("master");
    let entry = await env.getEntry("2PbNb2Tv3FUgoTXenvttuJ");
    entry.fields.name["en-US"] = "Volver al futuro I";
    await entry.update();
    entry = await env.getEntry(entry.sys.id);
    await entry.publish();
    res.send(`Entry ${entry.sys.id} updated.`);
  },
};

module.exports = mainController;
