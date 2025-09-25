const depressionSchema = {
    type: 'object',
    required: [
        'capacidad_reir_ver_lado_bueno',
        'mirar_futuro_con_placer',
        'culparse_sin_necesidad',
        'ansiedad_preocupacion_sin_motivo',
        'miedo_panico_sin_motivo',
        'sensacion_opresion_agobio',
        'infelicidad_dificultad_dormir',
        'tristeza_desgracia',
        'infelicidad_llanto',
        'pensamientos_autolesion'
    ],
    properties: {
        id_depresion: {
            type: 'integer',
            description: 'ID único del registro de depresión'
        },
        id_usuario: {
            type: 'integer',
            description: 'ID del usuario'
        },
        capacidad_reir_ver_lado_bueno: {
            type: 'integer',
            enum: [0, 1],
            description: 'Capacidad de reír y ver el lado bueno (0 = NO, 1 = SI)',
            example: 1
        },
        mirar_futuro_con_placer: {
            type: 'integer',
            enum: [0, 1],
            description: 'Mirar el futuro con placer (0 = NO, 1 = SI)',
            example: 0
        },
        culparse_sin_necesidad: {
            type: 'integer',
            enum: [0, 1],
            description: 'Culparse sin necesidad (0 = NO, 1 = SI)',
            example: 1
        },
        ansiedad_preocupacion_sin_motivo: {
            type: 'integer',
            enum: [0, 1],
            description: 'Ansiedad y preocupación sin motivo (0 = NO, 1 = SI)',
            example: 1
        },
        miedo_panico_sin_motivo: {
            type: 'integer',
            enum: [0, 1],
            description: 'Miedo y pánico sin motivo (0 = NO, 1 = SI)',
            example: 0
        },
        sensacion_opresion_agobio: {
            type: 'integer',
            enum: [0, 1],
            description: 'Sensación de opresión y agobio (0 = NO, 1 = SI)',
            example: 1
        },
        infelicidad_dificultad_dormir: {
            type: 'integer',
            enum: [0, 1],
            description: 'Infelicidad y dificultad para dormir (0 = NO, 1 = SI)',
            example: 1
        },
        tristeza_desgracia: {
            type: 'integer',
            enum: [0, 1],
            description: 'Tristeza y desgracia (0 = NO, 1 = SI)',
            example: 1
        },
        infelicidad_llanto: {
            type: 'integer',
            enum: [0, 1],
            description: 'Infelicidad y llanto (0 = NO, 1 = SI)',
            example: 0
        },
        pensamientos_autolesion: {
            type: 'integer',
            enum: [0, 1],
            description: 'Pensamientos de autolesión (0 = NO, 1 = SI)',
            example: 0
        }
    }
}

module.exports = depressionSchema