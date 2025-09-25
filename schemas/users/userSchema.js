const userSchema = {
    type: 'object',
    required: ['correo', 'contrasena', 'nombre', 'fecha_nacimiento', 'celular', 'cedula'],
    properties: {
        id_usuario: {
            type: 'integer',
            description: 'ID único del usuario'
        },
        id_rol: {
            type: 'integer',
            description: 'ID del rol del usuario',
            default: 1
        },
        correo: {
            type: 'string',
            format: 'email',
            description: 'Correo electrónico del usuario'
        },
        contrasena: {
            type: 'string',
            description: 'Contraseña del usuario'
        },
        nombre: {
            type: 'string',
            description: 'Nombre completo del usuario'
        },
        fecha_nacimiento: {
            type: 'string',
            format: 'date',
            description: 'Fecha de nacimiento del usuario'
        },
        celular: {
            type: 'string',
            description: 'Número de celular del usuario'
        },
        cedula: {
            type: 'string',
            description: 'Número de documento de identidad'
        }
    }
}

module.exports = userSchema