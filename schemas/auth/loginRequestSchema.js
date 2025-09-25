const loginRequestSchema = {
    type: 'object',
    required: ['correo', 'contrasena'],
    properties: {
        correo: {
            type: 'string',
            format: 'email',
            description: 'Correo electrónico del usuario',
            example: 'usuario@example.com'
        },
        contrasena: {
            type: 'string',
            description: 'Contraseña del usuario',
            example: 'miContraseña123'
        }
    }
}

module.exports = loginRequestSchema