const characterResponseSchema = {
    type: 'object',
    properties: {
        id_caracterizacion: {
            type: 'integer',
            description: 'ID único de la caracterización'
        },
        id_usuario: {
            type: 'integer',
            description: 'ID del usuario asociado'
        },
        lugar_residencia: {
            type: 'string',
            description: 'Lugar de residencia'
        },
        estrato: {
            type: 'integer',
            description: 'Estrato socioeconómico'
        },
        tipo_vivienda: {
            type: 'string',
            description: 'Tipo de vivienda'
        },
        condiciones: {
            type: 'string',
            description: 'Condiciones de la vivienda'
        },
        afiliacion: {
            type: 'string',
            description: 'Afiliación al sistema de salud'
        },
        ocupacion: {
            type: 'string',
            description: 'Ocupación laboral'
        },
        contrato: {
            type: 'string',
            description: 'Tipo de contrato laboral'
        },
        ingresos: {
            type: 'string',
            description: 'Nivel de ingresos'
        },
        composicion: {
            type: 'string',
            description: 'Composición familiar'
        },
        estado_civil: {
            type: 'string',
            description: 'Estado civil'
        },
        relacion_pareja: {
            type: 'string',
            description: 'Calidad de la relación de pareja'
        },
        relaciones_familiares: {
            type: 'string',
            description: 'Calidad de las relaciones familiares'
        },
        red_apoyo: {
            type: 'string',
            description: 'Red de apoyo social'
        },
        embarazo: {
            type: 'string',
            description: 'Información sobre embarazo'
        },
        aborto: {
            type: 'string',
            description: 'Información sobre abortos'
        },
        maltrato_fisico: {
            type: 'string',
            description: 'Antecedentes de maltrato físico'
        },
        maltrato_psicologico: {
            type: 'string',
            description: 'Antecedentes de maltrato psicológico'
        },
        abuso_sexual: {
            type: 'string',
            description: 'Antecedentes de abuso sexual'
        },
        sustancias: {
            type: 'string',
            description: 'Consumo de sustancias'
        },
        ansiedad: {
            type: 'string',
            description: 'Síntomas de ansiedad'
        },
        depresion: {
            type: 'string',
            description: 'Síntomas de depresión'
        },
        otro_trastorno: {
            type: 'string',
            description: 'Otros trastornos mentales'
        },
        psicoterapia: {
            type: 'string',
            description: 'Historial de psicoterapia'
        },
        farmacoterapia: {
            type: 'string',
            description: 'Historial de farmacoterapia'
        },
        informacion_adicional: {
            type: 'string',
            description: 'Información adicional relevante'
        },
        controles_prenatales: {
            type: 'string',
            description: 'Información sobre controles prenatales'
        },
        controles_psicologia: {
            type: 'string',
            description: 'Información sobre controles psicológicos'
        },
        // Datos del usuario asociado (desde el JOIN)
        nombre: {
            type: 'string',
            description: 'Nombre completo del usuario'
        },
        correo: {
            type: 'string',
            format: 'email',
            description: 'Correo electrónico del usuario'
        },
        celular: {
            type: 'string',
            description: 'Número de celular del usuario'
        },
        cedula: {
            type: 'string',
            description: 'Cédula del usuario'
        },
        fecha_nacimiento: {
            type: 'string',
            format: 'date',
            description: 'Fecha de nacimiento del usuario'
        }
    }
}

module.exports = characterResponseSchema