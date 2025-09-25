const pool = require('../config/db')

//Obtener todas las depresiones
const getAll = async () => {
    const query = `
        SELECT 
            d.*,
            u.nombre AS usuario_nombre,
            u.correo AS usuario_correo,
            u.celular AS usuario_celular,
            u.cedula AS usuario_cedula,
            u.fecha_nacimiento AS usuario_fecha_nacimiento
        FROM public.depresion d
        INNER JOIN public.usuario u ON d.id_usuario = u.id_usuario
    `
    const result = await pool.query(query)
    return result.rows
}

//Obtener por ID
const getById = async(id_depresion) => {
    const query = `
        SELECT 
            d.*,
            u.nombre,
            u.correo,
            u.celular,
            u.cedula,
            u.fecha_nacimiento
        FROM depresion d
        INNER JOIN usuario u ON d.id_usuario = u.id_usuario
        WHERE d.id_depresion = $1
    `
    const result = await pool.query(query, [id_depresion])
    return result.rows[0]
}

//Obtener por nombre de Usuario
const getByNameUser = async(nombreUsuario) => {
    const query = `
        SELECT 
            d.*,
            u.nombre,
            u.correo,
            u.celular,
            u.cedula,
            u.fecha_nacimiento
        FROM depresion d
        INNER JOIN usuario u ON d.id_usuario = u.id_usuario
        WHERE u.nombre ILIKE $1
    `
    const result = await pool.query(query, [`%${nombreUsuario}%`])
    return result.rows
}

//Obtener por ID de usuario
const getByUserId = async(id_usuario) => {
    const result = await pool.query('SELECT * FROM depresion WHERE id_usuario = $1', [id_usuario])
    return result.rows[0]
}

//Crear depresion
const createDepression = async(id_usuario, capacidad_reir_ver_lado_bueno, mirar_futuro_con_placer, culparse_sin_necesidad, ansiedad_preocupacion_sin_motivo, miedo_panico_sin_motivo, sensacion_opresion_agobio, infelicidad_dificultad_dormir, tristeza_desgracia, infelicidad_llanto, pensamientos_autolesion ) => {
    const result = await pool.query(
        `INSERT INTO depresion ( 
            id_usuario, 
            capacidad_reir_ver_lado_bueno, 
            mirar_futuro_con_placer, 
            culparse_sin_necesidad, 
            ansiedad_preocupacion_sin_motivo, 
            miedo_panico_sin_motivo, 
            sensacion_opresion_agobio, 
            infelicidad_dificultad_dormir, 
            tristeza_desgracia, 
            infelicidad_llanto, 
            pensamientos_autolesion 
        ) VALUES ( 
            $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 
        ) RETURNING *`, 
        [ 
            id_usuario, 
            capacidad_reir_ver_lado_bueno, 
            mirar_futuro_con_placer, 
            culparse_sin_necesidad, 
            ansiedad_preocupacion_sin_motivo, 
            miedo_panico_sin_motivo, 
            sensacion_opresion_agobio, 
            infelicidad_dificultad_dormir, 
            tristeza_desgracia, 
            infelicidad_llanto, 
            pensamientos_autolesion 
        ]
    )
    return result.rows[0]
}


//Eliminar depresion
const deleteDepression = async(id_depresion) => {
    const result = await pool.query('DELETE FROM depresion WHERE id_depresion = $1 RETURNING *', [id_depresion])
    return result.rows[0]
}

module.exports = {
    getAll,
    getById,
    getByNameUser,
    getByUserId,
    createDepression,
    deleteDepression
}
