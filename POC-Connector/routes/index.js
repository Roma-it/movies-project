var express = require("express");
var router = express.Router();
const mainController = require("../controllers/controllers");

/* GET home page. */
router.get("/", mainController.index);
router.get("/entries", mainController.getEntries);
router.get("/entry", mainController.getEntryById);
router.get("/all-entries", mainController.getAllEntries);
router.get("/draft-entry/:id", mainController.getDraftEntryById);
router.get("/filter-drafts-entries", mainController.filterDraftEntries);
router.get("/contentful-entries", mainController.getEntriesWithContentful);
router.get(
  "/contentful-management-entries",
  mainController.getEntriesWithContentfulManagement
);
router.get("/update-entry", mainController.updateEntry);
router.get("/update-async-entry", mainController.updateAsyncEntry);
module.exports = router;
