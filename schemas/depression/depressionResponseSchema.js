const depressionResponseSchema = {
    type: 'object',
    properties: {
        status: {
            type: 'string',
            description: 'Estado de la respuesta',
            example: 'Success'
        },
        registro_depresion: {
            type: 'object',
            properties: {
                id_depresion: {
                    type: 'integer',
                    description: 'ID único del registro de depresión',
                    example: 1
                },
                id_usuario: {
                    type: 'integer',
                    description: 'ID del usuario',
                    example: 5
                },
                capacidad_reir_ver_lado_bueno: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Capacidad de reír y ver el lado bueno (0 = NO, 1 = SI)'
                },
                mirar_futuro_con_placer: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Mirar el futuro con placer (0 = NO, 1 = SI)'
                },
                culparse_sin_necesidad: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Culparse sin necesidad (0 = NO, 1 = SI)'
                },
                ansiedad_preocupacion_sin_motivo: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Ansiedad y preocupación sin motivo (0 = NO, 1 = SI)'
                },
                miedo_panico_sin_motivo: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Miedo y pánico sin motivo (0 = NO, 1 = SI)'
                },
                sensacion_opresion_agobio: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Sensación de opresión y agobio (0 = NO, 1 = SI)'
                },
                infelicidad_dificultad_dormir: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Infelicidad y dificultad para dormir (0 = NO, 1 = SI)'
                },
                tristeza_desgracia: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Tristeza y desgracia (0 = NO, 1 = SI)'
                },
                infelicidad_llanto: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Infelicidad y llanto (0 = NO, 1 = SI)'
                },
                pensamientos_autolesion: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Pensamientos de autolesión (0 = NO, 1 = SI)'
                }
            }
        },
        mensaje: {
            type: 'string',
            description: 'Mensaje de la respuesta',
            example: 'Consulta exitosa'
        }
    }
}

module.exports = depressionResponseSchema