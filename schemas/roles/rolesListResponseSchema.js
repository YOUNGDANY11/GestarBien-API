const rolesListResponseSchema = {
    type: 'object',
    properties: {
        status: {
            type: 'string',
            example: 'Success'
        },
        roles: {
            type: 'array',
            items: {
                $ref: '#/components/schemas/Rol'
            }
        },
        mensaje: {
            type: 'string',
            example: 'Consulta exitosa'
        }
    }
}

module.exports = rolesListResponseSchema