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
            enum: [1, 2, 3, 4],
            description: 'Capacidad de reír y ver el lado bueno (1 = Tanto como siempre, 2 = No tanto ahora, 3 = Mucho menos, 4 = No, no he podido)',
            example: 1
        },
        mirar_futuro_con_placer: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Mirar el futuro con placer (1 = Tanto como siempre, 2 = Algo menos de lo que solía hacer, 3 = Definitivamente menos, 4 = No, nada)',
            example: 2
        },
        culparse_sin_necesidad: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Culparse sin necesidad (1 = Sí, la mayoría de las veces, 2 = Sí, algunas veces, 3 = No muy a menudo, 4 = No, nunca)',
            example: 1
        },
        ansiedad_preocupacion_sin_motivo: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Ansiedad y preocupación sin motivo (1 = No, para nada, 2 = Casi nada, 3 = Sí, a veces, 4 = Sí, a menudo)',
            example: 3
        },
        miedo_panico_sin_motivo: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Miedo y pánico sin motivo (1 = Sí, bastante, 2 = Sí, a veces, 3 = No, no mucho, 4 = No, nada)',
            example: 4
        },
        sensacion_opresion_agobio: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Sensación de opresión y agobio (1 = Sí, la mayor parte de las veces, 2 = Sí, a veces, 3 = No, casi nunca, 4 = No, nada)',
            example: 2
        },
        infelicidad_dificultad_dormir: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Infelicidad y dificultad para dormir (1 = Sí, la mayoría de las veces, 2 = Sí, a veces, 3 = No muy a menudo, 4 = No, nada)',
            example: 1
        },
        tristeza_desgracia: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Tristeza y desgracia (1 = Sí, casi siempre, 2 = Sí, bastante a menudo, 3 = No muy a menudo, 4 = No, nada)',
            example: 2
        },
        infelicidad_llanto: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Infelicidad y llanto (1 = Sí, casi siempre, 2 = Sí, bastante a menudo, 3 = Sólo en ocasiones, 4 = No, nunca)',
            example: 3
        },
        pensamientos_autolesion: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Pensamientos de autolesión (1 = Sí, bastante a menudo, 2 = A veces, 3 = Casi nunca, 4 = No, nunca)',
            example: 4
        }
    }
}

module.exports = depressionSchema