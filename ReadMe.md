### CARPETA SOLUTION

Esta carpeta contiene únicamente los archivos que fueron requeridos: los modelos con sus relaciones y las consultas realizadas para cada situación.

Sin perjuicio de ello, he generado una aplicación con Express Generator que se puede poner en marcha para testear su funcionamiento. Para ello, deben seguirse las instrucciones detalladas a continuación.

# BASE DE DATOS

Antes de comenzar a utilizar la App, deberá ejecutarse el script database.sql en algún gestor de base de datos a fin de poder crear la base de datos e incorporar los valores predeterminados con el propósito de hacer pruebas

### `npm install`

Luego deberán instalarse todas las dependencias necesarias en el directorio raíz

### `npm start`

Luego de realizado este proceso, se deberá correr el comando npm start en el directorio raíz y abrirá el puerto 3000 para poder utilizar la aplicación consultando los siguientes endpoints:
http://localhost:3000/movies/4
http://localhost:3000/peliculasPorActor/4

El parámetro del final podrá modificarse entre los valores creados para obtener los diferentes resultados.
El primer endpoint muestra a la película seleccionada y todas las personas que participaron con sus respectivos roles.
El segundo endpoint muestra las películas en las que participó la persona selecionada y los roles desempeñados.
