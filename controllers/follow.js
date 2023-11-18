//acciones de prueba

const pruebaFollow = (req, res) => {
    return res.status(200).json({
        message: "mensaje enviado desde controllers/follow.js"
    })
}

module.exports = {
    pruebaFollow
}