const errorSchema = {
    type: 'object',
    properties: {
        status: {
            type: 'string',
            example: 'Error'
        },
        mensaje: {
            type: 'string'
        }
    }
}

module.exports = errorSchema