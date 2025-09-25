const rolSchema = {
    type: 'object',
    properties: {
        id_rol: {
            type: 'integer',
            example: 1,
            description: 'ID único del rol'
        },
        nombre: {
            type: 'string',
            example: 'Admin',
            description: 'Nombre del rol'
        }
    }
}

module.exports = rolSchema