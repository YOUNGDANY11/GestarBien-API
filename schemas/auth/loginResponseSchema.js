const loginResponseSchema = {
    type: 'object',
    properties: {
        status: {
            type: 'string',
            enum: ['Success', 'Error'],
            description: 'Estado de la respuesta'
        },
        token: {
            type: 'string',
            description: 'Token JWT para autenticación',
            example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
        },
        mensaje: {
            type: 'string',
            description: 'Mensaje descriptivo de la respuesta',
            example: 'Inicio de sesión con éxito'
        }
    }
}

module.exports = loginResponseSchema