const jwt = require('jsonwebtoken')

// Middleware para autenticar el token JWT
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({
            status: 'Error',
            mensaje: 'Token de autenticación requerido'
        })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({
                status: 'Error',
                mensaje: 'Token inválido o expirado'
            })
        }
        req.user = user
        console.log(user)
        next()
    })
}

module.exports = authenticateToken