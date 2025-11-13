const pool = require('../config/db')

//Obtener todas
const getAll = async () => {
    const query = `
        SELECT 
            a.*,
            u.nombre AS usuario_nombre,
            u.correo AS usuario_correo,
            u.fecha_nacimiento AS usuario_fecha_nacimiento,
            u.celular AS usuario_celular,
            u.cedula AS usuario_cedula
        FROM public.ansiedad a
        INNER JOIN public.usuario u ON a.id_usuario = u.id_usuario
        ORDER BY a.id_ansiedad DESC
    `
    const result = await pool.query(query)
    return result.rows
}

//Obtener por ID
const getById = async(id_ansiedad) => {
    const query = `
        SELECT 
            a.*,
            u.nombre,
            u.correo,
            u.celular,
            u.cedula,
            u.fecha_nacimiento
        FROM ansiedad a
        INNER JOIN usuario u ON a.id_usuario = u.id_usuario
        WHERE a.id_ansiedad = $1
    `
    const result = await pool.query(query, [id_ansiedad])
    return result.rows[0]
}

//Obtener por nombre de Usuario
const getByNameUser = async(nombreUsuario) => {
    const query = `
        SELECT 
            a.*,
            u.nombre,
            u.correo,
            u.celular,
            u.cedula,
            u.fecha_nacimiento
        FROM ansiedad a
        INNER JOIN usuario u ON a.id_usuario = u.id_usuario
        WHERE u.nombre ILIKE $1
    `
    const result = await pool.query(query, [`%${nombreUsuario}%`])
    return result.rows
}

//Obtener por ID de usuario
const getByUserId = async(id_usuario) => {
    const result = await pool.query('SELECT * FROM ansiedad WHERE id_usuario = $1', [id_usuario])
    return result.rows[0]
}

//Obtener por ID de usuario activo
const getByUserIdActive = async(id_usuario) => {
    const result = await pool.query('SELECT * FROM ansiedad WHERE id_usuario = $1', [id_usuario])
    return result.rows[0]
}

//Crear registro de ansiedad
const createAnxiety = async (id_usuario, preocupacion_bienestar_propio, miedo_dano_futuro, temor_malo_suceda, preocupacion_muchas_cosas, preocupacion_futuro, sentirse_desbordado, miedo_mente_bloquee, agobios_estres_incomodidad, preocupacion_empleo, dificultad_dormir, hacer_cosas_cierto_orden, busqueda_perfeccion, necesidad_control, dificultad_dejar_revisar, nerviosismo_sobresalto, preocupacion_pensamientos_repetitivos, estar_guardia_atenta, molestia_recuerdos_suenos, preocupacion_verguenza, miedo_juicio_negativo, incomodidad_multitudes, evitar_actividades_sociales, evitar_cosas_preocupan, desapego_irrealidad, perdida_tiempo_memoria, dificultad_adaptar_cambios, ansiedad_dificulta_actividades, pensamientos_acelerados, miedo_perder_control, sentimiento_panico, agitacion) => {
    const result = await pool.query(`
            INSERT INTO ansiedad (
                id_usuario,
                preocupacion_bienestar_propio,
                miedo_dano_futuro,
                temor_malo_suceda,
                preocupacion_muchas_cosas,
                preocupacion_futuro,
                sentirse_desbordado,
                miedo_mente_bloquee,
                agobios_estres_incomodidad,
                preocupacion_empleo,
                dificultad_dormir,
                hacer_cosas_cierto_orden,
                busqueda_perfeccion,
                necesidad_control,
                dificultad_dejar_revisar,
                nerviosismo_sobresalto,
                preocupacion_pensamientos_repetitivos,
                estar_guardia_atenta,
                molestia_recuerdos_suenos,
                preocupacion_verguenza,
                miedo_juicio_negativo,
                incomodidad_multitudes,
                evitar_actividades_sociales,
                evitar_cosas_preocupan,
                desapego_irrealidad,
                perdida_tiempo_memoria,
                dificultad_adaptar_cambios,
                ansiedad_dificulta_actividades,
                pensamientos_acelerados,
                miedo_perder_control,
                sentimiento_panico,
                agitacion
            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
                $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,
                $21, $22, $23, $24, $25, $26, $27, $28, $29, $30,
                $31, $32
            ) RETURNING *
        `,[id_usuario, preocupacion_bienestar_propio, miedo_dano_futuro, temor_malo_suceda, preocupacion_muchas_cosas, preocupacion_futuro, sentirse_desbordado, miedo_mente_bloquee, agobios_estres_incomodidad, preocupacion_empleo, dificultad_dormir, hacer_cosas_cierto_orden, busqueda_perfeccion, necesidad_control, dificultad_dejar_revisar, nerviosismo_sobresalto, preocupacion_pensamientos_repetitivos, estar_guardia_atenta, molestia_recuerdos_suenos, preocupacion_verguenza, miedo_juicio_negativo, incomodidad_multitudes, evitar_actividades_sociales, evitar_cosas_preocupan, desapego_irrealidad, perdida_tiempo_memoria, dificultad_adaptar_cambios, ansiedad_dificulta_actividades, pensamientos_acelerados, miedo_perder_control, sentimiento_panico, agitacion ])
    return result.rows[0]
}

//Eliminar ansiedad
const deleteAnxiety = async(id_ansiedad) => {
    const result = await pool.query('DELETE FROM ansiedad WHERE id_ansiedad = $1 RETURNING *', [id_ansiedad])
    return result.rows[0]
}

module.exports = {
    getAll,
    getById,
    getByNameUser,
    getByUserId,
    getByUserIdActive,
    createAnxiety,
    deleteAnxiety
}