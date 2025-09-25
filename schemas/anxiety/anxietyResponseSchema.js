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
                    enum: [0, 1],
                    description: 'Preocupación por bienestar propio (0 = NO, 1 = SI)'
                },
                miedo_dano_futuro: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Miedo a daño futuro (0 = NO, 1 = SI)'
                },
                temor_malo_suceda: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Temor a que algo malo suceda (0 = NO, 1 = SI)'
                },
                preocupacion_muchas_cosas: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Preocupación por muchas cosas (0 = NO, 1 = SI)'
                },
                preocupacion_futuro: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Preocupación por el futuro (0 = NO, 1 = SI)'
                },
                sentirse_desbordado: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Sentirse desbordado (0 = NO, 1 = SI)'
                },
                miedo_mente_bloquee: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Miedo a que la mente se bloquee (0 = NO, 1 = SI)'
                },
                agobios_estres_incomodidad: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Agobios, estrés e incomodidad (0 = NO, 1 = SI)'
                },
                preocupacion_empleo: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Preocupación por el empleo (0 = NO, 1 = SI)'
                },
                dificultad_dormir: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Dificultad para dormir (0 = NO, 1 = SI)'
                },
                hacer_cosas_cierto_orden: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Necesidad de hacer cosas en cierto orden (0 = NO, 1 = SI)'
                },
                busqueda_perfeccion: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Búsqueda de perfección (0 = NO, 1 = SI)'
                },
                necesidad_control: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Necesidad de control (0 = NO, 1 = SI)'
                },
                dificultad_dejar_revisar: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Dificultad para dejar de revisar (0 = NO, 1 = SI)'
                },
                nerviosismo_sobresalto: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Nerviosismo y sobresalto (0 = NO, 1 = SI)'
                },
                preocupacion_pensamientos_repetitivos: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Preocupación por pensamientos repetitivos (0 = NO, 1 = SI)'
                },
                estar_guardia_atenta: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Estar en guardia o atenta (0 = NO, 1 = SI)'
                },
                molestia_recuerdos_suenos: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Molestia por recuerdos o sueños (0 = NO, 1 = SI)'
                },
                preocupacion_verguenza: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Preocupación por la vergüenza (0 = NO, 1 = SI)'
                },
                miedo_juicio_negativo: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Miedo al juicio negativo (0 = NO, 1 = SI)'
                },
                incomodidad_multitudes: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Incomodidad en multitudes (0 = NO, 1 = SI)'
                },
                evitar_actividades_sociales: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Evitar actividades sociales (0 = NO, 1 = SI)'
                },
                evitar_cosas_preocupan: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Evitar cosas que preocupan (0 = NO, 1 = SI)'
                },
                desapego_irrealidad: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Desapego o irrealidad (0 = NO, 1 = SI)'
                },
                perdida_tiempo_memoria: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Pérdida de tiempo o memoria (0 = NO, 1 = SI)'
                },
                dificultad_adaptar_cambios: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Dificultad para adaptarse a cambios (0 = NO, 1 = SI)'
                },
                ansiedad_dificulta_actividades: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'La ansiedad dificulta actividades (0 = NO, 1 = SI)'
                },
                pensamientos_acelerados: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Pensamientos acelerados (0 = NO, 1 = SI)'
                },
                miedo_perder_control: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Miedo a perder el control (0 = NO, 1 = SI)'
                },
                sentimiento_panico: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Sentimiento de pánico (0 = NO, 1 = SI)'
                },
                agitacion: {
                    type: 'integer',
                    enum: [0, 1],
                    description: 'Agitación (0 = NO, 1 = SI)'
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