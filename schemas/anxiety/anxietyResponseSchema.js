const anxietyResponseSchema = {
    type: 'object',
    properties: {
        status: {
            type: 'string',
            description: 'Estado de la respuesta',
            example: 'Success'
        },
        registro_ansiedad: {
            type: 'object',
            properties: {
                id_ansiedad: {
                    type: 'integer',
                    description: 'ID único del registro de ansiedad',
                    example: 1
                },
                id_usuario: {
                    type: 'integer',
                    description: 'ID del usuario',
                    example: 5
                },
                preocupacion_bienestar_propio: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Preocupación por bienestar propio (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                miedo_dano_futuro: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Miedo a daño futuro (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                temor_malo_suceda: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Temor a que algo malo suceda (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                preocupacion_muchas_cosas: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Preocupación por muchas cosas (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                preocupacion_futuro: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Preocupación por el futuro (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                sentirse_desbordado: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Sentirse desbordado (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                miedo_mente_bloquee: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Miedo a que la mente se bloquee (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                agobios_estres_incomodidad: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Agobios, estrés e incomodidad (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                preocupacion_empleo: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Preocupación por el empleo (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                dificultad_dormir: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Dificultad para dormir (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                hacer_cosas_cierto_orden: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Necesidad de hacer cosas en cierto orden (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                busqueda_perfeccion: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Búsqueda de perfección (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                necesidad_control: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Necesidad de control (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                dificultad_dejar_revisar: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Dificultad para dejar de revisar (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                nerviosismo_sobresalto: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Nerviosismo y sobresalto (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                preocupacion_pensamientos_repetitivos: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Preocupación por pensamientos repetitivos (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                estar_guardia_atenta: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Estar en guardia o atenta (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                molestia_recuerdos_suenos: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Molestia por recuerdos o sueños (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                preocupacion_verguenza: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Preocupación por la vergüenza (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                miedo_juicio_negativo: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Miedo al juicio negativo (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                incomodidad_multitudes: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Incomodidad en multitudes (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                evitar_actividades_sociales: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Evitar actividades sociales (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                evitar_cosas_preocupan: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Evitar cosas que preocupan (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                desapego_irrealidad: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Desapego o irrealidad (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                perdida_tiempo_memoria: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Pérdida de tiempo o memoria (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                dificultad_adaptar_cambios: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Dificultad para adaptarse a cambios (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                ansiedad_dificulta_actividades: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'La ansiedad dificulta actividades (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                pensamientos_acelerados: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Pensamientos acelerados (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                miedo_perder_control: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Miedo a perder el control (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                sentimiento_panico: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Sentimiento de pánico (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                },
                agitacion: {
                    type: 'integer',
                    enum: [1, 2, 3, 4],
                    description: 'Agitación (1 = Nunca, 2 = Algunas veces, 3 = Con frecuencia, 4 = Casi siempre)'
                }
            }
        },
        mensaje: {
            type: 'string',
            description: 'Mensaje descriptivo de la operación',
            example: 'Consulta exitosa'
        }
    }
}

module.exports = anxietyResponseSchema
