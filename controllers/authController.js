const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

// Iniciar sesión
const login = async (req, res) => {
    try {
        const { correo, contrasena } = req.body
        if(!correo || !contrasena){
            return res.status(400).json({
                status:'Error',
                mensaje:'Es requerida toda la informacion'
            })
        }
        const user = await userModel.getUserByEmail(correo)
        if (user.length === 0) {
            return res.status(404).json({
                status: 'Error',
                mensaje: 'Correo no registrado'
            })
        }

        const isMatch = await bcrypt.compare(contrasena, user[0].contrasena)
        if (!isMatch) {
            return res.status(400).json({
                status: 'Error',
                mensaje: 'Contraseña incorrecta'
            })
        }

        const token = jwt.sign({ id_usuario: user[0].id_usuario, correo: user[0].correo, rol: user[0].id_rol, nombre: user[0].nombre }, process.env.JWT_SECRET, 
            { expiresIn: '1y' }
        )
        
        return res.status(200).json({
            status: 'Success',
            token: token,
            mensaje: 'Inicio de sesión con éxito'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 'Error',
            mensaje: 'No se pudo iniciar sesión'
        })
    }
}

module.exports = {
    login
}