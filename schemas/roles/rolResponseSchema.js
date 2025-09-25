const rolResponseSchema = {
    type: 'object',
    properties: {
        status: {
            type: 'string',
            example: 'Success'
        },
        rol: {
            $ref: '#/components/schemas/Rol'
        },
        mensaje: {
            type: 'string',
            example: 'Consulta exitosa'
        }
    }
}

module.exports = rolResponseSchema