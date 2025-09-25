const anxietySchema = {
    type: 'object',
    required: [
        'preocupacion_bienestar_propio',
        'miedo_dano_futuro',
        'temor_malo_suceda',
        'preocupacion_muchas_cosas',
        'preocupacion_futuro',
        'sentirse_desbordado',
        'miedo_mente_bloquee',
        'agobios_estres_incomodidad',
        'preocupacion_empleo',
        'dificultad_dormir',
        'hacer_cosas_cierto_orden',
        'busqueda_perfeccion',
        'necesidad_control',
        'dificultad_dejar_revisar',
        'nerviosismo_sobresalto',
        'preocupacion_pensamientos_repetitivos',
        'estar_guardia_atenta',
        'molestia_recuerdos_suenos',
        'preocupacion_verguenza',
        'miedo_juicio_negativo',
        'incomodidad_multitudes',
        'evitar_actividades_sociales',
        'evitar_cosas_preocupan',
        'desapego_irrealidad',
        'perdida_tiempo_memoria',
        'dificultad_adaptar_cambios',
        'ansiedad_dificulta_actividades',
        'pensamientos_acelerados',
        'miedo_perder_control',
        'sentimiento_panico',
        'agitacion'
    ],
    properties: {
        id_ansiedad: {
            type: 'integer',
            description: 'ID único del registro de ansiedad'
        },
        id_usuario: {
            type: 'integer',
            description: 'ID del usuario'
        },
        preocupacion_bienestar_propio: {
            type: 'integer',
            enum: [0, 1],
            description: 'Preocupación por bienestar propio (0 = NO, 1 = SI)',
            example: 1
        },
        miedo_dano_futuro: {
            type: 'integer',
            enum: [0, 1],
            description: 'Miedo a daño futuro (0 = NO, 1 = SI)',
            example: 0
        },
        temor_malo_suceda: {
            type: 'integer',
            enum: [0, 1],
            description: 'Temor a que algo malo suceda (0 = NO, 1 = SI)',
            example: 1
        },
        preocupacion_muchas_cosas: {
            type: 'integer',
            enum: [0, 1],
            description: 'Preocupación por muchas cosas (0 = NO, 1 = SI)',
            example: 1
        },
        preocupacion_futuro: {
            type: 'integer',
            enum: [0, 1],
            description: 'Preocupación por el futuro (0 = NO, 1 = SI)',
            example: 1
        },
        sentirse_desbordado: {
            type: 'integer',
            enum: [0, 1],
            description: 'Sentirse desbordado (0 = NO, 1 = SI)',
            example: 0
        },
        miedo_mente_bloquee: {
            type: 'integer',
            enum: [0, 1],
            description: 'Miedo a que la mente se bloquee (0 = NO, 1 = SI)',
            example: 1
        },
        agobios_estres_incomodidad: {
            type: 'integer',
            enum: [0, 1],
            description: 'Agobios, estrés e incomodidad (0 = NO, 1 = SI)',
            example: 1
        },
        preocupacion_empleo: {
            type: 'integer',
            enum: [0, 1],
            description: 'Preocupación por el empleo (0 = NO, 1 = SI)',
            example: 0
        },
        dificultad_dormir: {
            type: 'integer',
            enum: [0, 1],
            description: 'Dificultad para dormir (0 = NO, 1 = SI)',
            example: 1
        },
        hacer_cosas_cierto_orden: {
            type: 'integer',
            enum: [0, 1],
            description: 'Necesidad de hacer cosas en cierto orden (0 = NO, 1 = SI)',
            example: 0
        },
        busqueda_perfeccion: {
            type: 'integer',
            enum: [0, 1],
            description: 'Búsqueda de perfección (0 = NO, 1 = SI)',
            example: 1
        },
        necesidad_control: {
            type: 'integer',
            enum: [0, 1],
            description: 'Necesidad de control (0 = NO, 1 = SI)',
            example: 1
        },
        dificultad_dejar_revisar: {
            type: 'integer',
            enum: [0, 1],
            description: 'Dificultad para dejar de revisar (0 = NO, 1 = SI)',
            example: 0
        },
        nerviosismo_sobresalto: {
            type: 'integer',
            enum: [0, 1],
            description: 'Nerviosismo y sobresalto (0 = NO, 1 = SI)',
            example: 1
        },
        preocupacion_pensamientos_repetitivos: {
            type: 'integer',
            enum: [0, 1],
            description: 'Preocupación por pensamientos repetitivos (0 = NO, 1 = SI)',
            example: 1
        },
        estar_guardia_atenta: {
            type: 'integer',
            enum: [0, 1],
            description: 'Estar en guardia o atenta (0 = NO, 1 = SI)',
            example: 1
        },
        molestia_recuerdos_suenos: {
            type: 'integer',
            enum: [0, 1],
            description: 'Molestia por recuerdos o sueños (0 = NO, 1 = SI)',
            example: 0
        },
        preocupacion_verguenza: {
            type: 'integer',
            enum: [0, 1],
            description: 'Preocupación por la vergüenza (0 = NO, 1 = SI)',
            example: 1
        },
        miedo_juicio_negativo: {
            type: 'integer',
            enum: [0, 1],
            description: 'Miedo al juicio negativo (0 = NO, 1 = SI)',
            example: 1
        },
        incomodidad_multitudes: {
            type: 'integer',
            enum: [0, 1],
            description: 'Incomodidad en multitudes (0 = NO, 1 = SI)',
            example: 0
        },
        evitar_actividades_sociales: {
            type: 'integer',
            enum: [0, 1],
            description: 'Evitar actividades sociales (0 = NO, 1 = SI)',
            example: 1
        },
        evitar_cosas_preocupan: {
            type: 'integer',
            enum: [0, 1],
            description: 'Evitar cosas que preocupan (0 = NO, 1 = SI)',
            example: 1
        },
        desapego_irrealidad: {
            type: 'integer',
            enum: [0, 1],
            description: 'Desapego o irrealidad (0 = NO, 1 = SI)',
            example: 0
        },
        perdida_tiempo_memoria: {
            type: 'integer',
            enum: [0, 1],
            description: 'Pérdida de tiempo o memoria (0 = NO, 1 = SI)',
            example: 0
        },
        dificultad_adaptar_cambios: {
            type: 'integer',
            enum: [0, 1],
            description: 'Dificultad para adaptarse a cambios (0 = NO, 1 = SI)',
            example: 1
        },
        ansiedad_dificulta_actividades: {
            type: 'integer',
            enum: [0, 1],
            description: 'La ansiedad dificulta actividades (0 = NO, 1 = SI)',
            example: 1
        },
        pensamientos_acelerados: {
            type: 'integer',
            enum: [0, 1],
            description: 'Pensamientos acelerados (0 = NO, 1 = SI)',
            example: 1
        },
        miedo_perder_control: {
            type: 'integer',
            enum: [0, 1],
            description: 'Miedo a perder el control (0 = NO, 1 = SI)',
            example: 1
        },
        sentimiento_panico: {
            type: 'integer',
            enum: [0, 1],
            description: 'Sentimiento de pánico (0 = NO, 1 = SI)',
            example: 0
        },
        agitacion: {
            type: 'integer',
            enum: [0, 1],
            description: 'Agitación (0 = NO, 1 = SI)',
            example: 1
        }
    }
}

module.exports = anxietySchema