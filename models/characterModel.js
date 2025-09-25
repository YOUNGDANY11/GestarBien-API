const pool = require('../config/db')

//Obtener todas las caracterizaciones
const getAll = async () => {
    const query = `
        SELECT 
            c.*,
            u.nombre AS usuario_nombre,
            u.correo AS usuario_correo,
            u.celular AS usuario_celular,
            u.cedula AS usuario_cedula,
            u.fecha_nacimiento AS usuario_fecha_nacimiento
        FROM public.caracterizacion c
        INNER JOIN public.usuario u ON c.id_usuario = u.id_usuario
    `
    const result = await pool.query(query)
    return result.rows
}

//Obtener por ID
const getById = async(id_caracterizacion) =>{
    const query = `
        SELECT 
            c.*,
            u.nombre,
            u.correo,
            u.celular,
            u.cedula,
            u.fecha_nacimiento
        FROM caracterizacion c
        INNER JOIN usuario u ON c.id_usuario = u.id_usuario
        WHERE c.id_caracterizacion = $1
    `
    const result = await pool.query(query, [id_caracterizacion])
    return result.rows[0]
}

//Obtener por nombre de Usuario
const getByNameUser = async(nombreUsuario) => {
    const query = `
        SELECT 
            c.*,
            u.nombre,
            u.correo,
            u.celular,
            u.cedula,
            u.fecha_nacimiento
        FROM caracterizacion c
        INNER JOIN usuario u ON c.id_usuario = u.id_usuario
        WHERE u.nombre ILIKE $1
    `
    const result = await pool.query(query, [`%${nombreUsuario}%`])
    return result.rows
}

//Obtener por ID de usuario
const getByUserId = async(id_usuario) =>{
    const result = await pool.query('SELECT * FROM caracterizacion WHERE id_usuario = $1',[id_usuario])
    return result.rows[0]
}

//Crear caracterizacion
const createCharacter = async( id_usuario, lugar_residencia, estrato, tipo_vivienda, condiciones, afiliacion, ocupacion, contrato, ingresos, composicion, estado_civil, relacion_pareja, relaciones_familiares, red_apoyo, embarazo, aborto, maltrato_fisico, maltrato_psicologico, abuso_sexual, sustancias, ansiedad, depresion, otro_trastorno, psicoterapia, farmacoterapia, informacion_adicional, controles_prenatales, controles_psicologia ) => {
    const result = await pool.query('INSERT INTO caracterizacion ( id_usuario, lugar_residencia, estrato, tipo_vivienda, condiciones, afiliacion, ocupacion, contrato, ingresos, composicion, estado_civil, relacion_pareja, relaciones_familiares, red_apoyo, embarazo, aborto, maltrato_fisico, maltrato_psicologico, abuso_sexual, sustancias, ansiedad, depresion, otro_trastorno, psicoterapia, farmacoterapia, informacion_adicional, controles_prenatales, controles_psicologia ) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28 ) RETURNING *', [ id_usuario, lugar_residencia, estrato, tipo_vivienda, condiciones, afiliacion, ocupacion, contrato, ingresos, composicion, estado_civil, relacion_pareja, relaciones_familiares, red_apoyo, embarazo, aborto, maltrato_fisico, maltrato_psicologico, abuso_sexual, sustancias, ansiedad, depresion, otro_trastorno, psicoterapia, farmacoterapia, informacion_adicional, controles_prenatales, controles_psicologia ])
    return result.rows[0]
}

//Eliminar caracterizacion
const deleteCharacter = async(id_caracterizacion) =>{
    const result = await pool.query('DELETE FROM caracterizacion WHERE id_caracterizacion = $1 RETURNING *',[id_caracterizacion])
    return result.rows[0]
}

module.exports = {
    getAll,
    getById,
    getByNameUser,
    getByUserId,
    createCharacter,
    deleteCharacter
}