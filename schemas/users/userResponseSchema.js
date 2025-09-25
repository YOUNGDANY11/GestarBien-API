const userResponseSchema = {
    type: 'object',
    properties: {
        status: {
            type: 'string',
            enum: ['Success', 'Error']
        },
        mensaje: {
            type: 'string'
        },
        usuario: {
            $ref: '#/components/schemas/User'
        },
        usuarios: {
            type: 'array',
            items: {
                $ref: '#/components/schemas/User'
            }
        }
    }
}

module.exports = userResponseSchema