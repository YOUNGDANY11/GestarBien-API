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
            enum: [1, 2, 3, 4],
            description: 'Preocupación por bienestar propio (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 1
        },
        miedo_dano_futuro: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Miedo a daño futuro (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 2
        },
        temor_malo_suceda: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Temor a que algo malo suceda (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 1
        },
        preocupacion_muchas_cosas: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Preocupación por muchas cosas (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 3
        },
        preocupacion_futuro: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Preocupación por el futuro (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 2
        },
        sentirse_desbordado: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Sentirse desbordado (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 1
        },
        miedo_mente_bloquee: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Miedo a que la mente se bloquee (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 1
        },
        agobios_estres_incomodidad: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Agobios, estrés e incomodidad (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 2
        },
        preocupacion_empleo: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Preocupación por el empleo (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 1
        },
        dificultad_dormir: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Dificultad para dormir (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 3
        },
        hacer_cosas_cierto_orden: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Necesidad de hacer cosas en cierto orden (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 1
        },
        busqueda_perfeccion: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Búsqueda de perfección (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 2
        },
        necesidad_control: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Necesidad de control (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 2
        },
        dificultad_dejar_revisar: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Dificultad para dejar de revisar (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 1
        },
        nerviosismo_sobresalto: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Nerviosismo y sobresalto (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 3
        },
        preocupacion_pensamientos_repetitivos: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Preocupación por pensamientos repetitivos (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 2
        },
        estar_guardia_atenta: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Estar en guardia o atenta (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 2
        },
        molestia_recuerdos_suenos: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Molestia por recuerdos o sueños (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 1
        },
        preocupacion_verguenza: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Preocupación por la vergüenza (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 2
        },
        miedo_juicio_negativo: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Miedo al juicio negativo (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 3
        },
        incomodidad_multitudes: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Incomodidad en multitudes (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 1
        },
        evitar_actividades_sociales: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Evitar actividades sociales (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 2
        },
        evitar_cosas_preocupan: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Evitar cosas que preocupan (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 2
        },
        desapego_irrealidad: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Desapego o irrealidad (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 1
        },
        perdida_tiempo_memoria: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Pérdida de tiempo o memoria (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 1
        },
        dificultad_adaptar_cambios: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Dificultad para adaptarse a cambios (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 2
        },
        ansiedad_dificulta_actividades: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'La ansiedad dificulta actividades (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 3
        },
        pensamientos_acelerados: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Pensamientos acelerados (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 2
        },
        miedo_perder_control: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Miedo a perder el control (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 2
        },
        sentimiento_panico: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Sentimiento de pánico (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 1
        },
        agitacion: {
            type: 'integer',
            enum: [1, 2, 3, 4],
            description: 'Agitación (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)',
            example: 2
        }
    }
}

module.exports = anxietySchema