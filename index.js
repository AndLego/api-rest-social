//importar dependecias
const connection = require("./database/connection")
const express = require("express")
const cors = require("cors")

//welcome msg
console.log("social network running");
//conexion a base de datos

connection()

//crear servidor node
const app = express()
const port = 3030

//configurar cors
app.use(cors())

//convertir datos del body a objetos js
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//cargar conf rutas

//ruta de prueba
app.get("/ruta-prueba", (req, res) => {
    return res.status(200).json(
        {
            "id": 1,
            "name": "Joe",
            "web": "Doe"
        }
    )
})

//poner servidor a escuchar

app.listen(port, () => {
    console.log("Node server running on port", port);
})