//acciones de prueba

const pruebaPublication = (req, res) => {
    return res.status(200).json({
        message: "mensaje enviado desde controllers/users.js"
    })
}

module.exports = {
    pruebaPublication
}