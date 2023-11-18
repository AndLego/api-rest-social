//acciones de prueba

const pruebaPublication = (req, res) => {
    return res.status(200).json({
        message: "mensaje enviado desde controllers/publication.js"
    })
}

module.exports = {
    pruebaPublication
}