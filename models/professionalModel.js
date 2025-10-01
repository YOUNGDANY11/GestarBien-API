const pool = require('../config/db')

//Obtener todos los profesionales incluyendo sus certificados
const getAll = async () => {
    const query = `
        SELECT 
            p.*,
            u.nombre AS usuario_nombre,
            u.correo AS usuario_correo,
            u.celular AS usuario_celular,
            u.cedula AS usuario_cedula,
            u.fecha_nacimiento AS usuario_fecha_nacimiento,
            cp.id_certificacion,
            cp.nombre_archivo
        FROM public.profesional p
        INNER JOIN public.usuario u ON p.id_usuario = u.id_usuario
        LEFT JOIN public.certificacion_profesional cp ON p.id_profesional = cp.id_profesional
        ORDER BY p.id_profesional DESC
    `
    const result = await pool.query(query)
    return result.rows
}
//Obtener por ID
const getById = async (id_usuario) => {
    const query = `
        SELECT 
            u.id_usuario,
            u.nombre AS usuario_nombre,
            u.correo AS usuario_correo,
            u.celular AS usuario_celular,
            u.cedula AS usuario_cedula,
            u.fecha_nacimiento AS usuario_fecha_nacimiento,
            p.id_profesional,
            p.institucion,
            p.enfoque,
            cp.id_certificacion,
            cp.archivo,
            cp.nombre_archivo
        FROM public.usuario u
        LEFT JOIN public.profesional p ON u.id_usuario = p.id_usuario
        LEFT JOIN public.certificacion_profesional cp ON p.id_profesional = cp.id_profesional
        WHERE u.id_usuario = $1
    `
    const result = await pool.query(query, [id_usuario])
    return result.rows
}
const getByUserId = async(id_usuario) =>{
    const result = await pool.query('SELECT * FROM profesional WHERE id_usuario = $1',[id_usuario])
    return result.rows[0]
}

//Crear informacion sobre el profesional
const createDataProfessional = async(id_usuario,institucion,enfoque) =>{
    const result = await pool.query('INSERT INTO profesional (id_usuario,institucion,enfoque) VALUES ($1,$2,$3) RETURNING *',[id_usuario,institucion,enfoque])
    return result.rows[0]
}

//Crear certificacion profesional
const createCertificationProfessional = async(id_profesional, filename, originalName) => {
    // Guardamos el nombre del archivo del servidor en 'archivo' y el nombre original en 'nombre_archivo'
    const result = await pool.query(
        'INSERT INTO certificacion_profesional (id_profesional, archivo, nombre_archivo) VALUES ($1, $2, $3) RETURNING *',
        [id_profesional, filename, originalName]
    )
    return result.rows[0]
}

//Eliminar profesional
const deleteProfessional = async(id_usuario)=>{
    const result = await pool.query('DELETE FROM profesional WHERE id_usuario = $1 RETURNING *' ,[id_usuario])
}

//Eliminar certificado profesional por ID de certificación
const deleteCertificate = async(id_certificacion)=>{
    const result = await pool.query('DELETE FROM certificacion_profesional WHERE id_certificacion = $1 RETURNING *',[id_certificacion])
    return result.rows[0]
}

//Obtener certificado por ID para poder obtener el nombre del archivo antes de eliminar
const getCertificateById = async(id_certificacion) => {
    const result = await pool.query('SELECT * FROM certificacion_profesional WHERE id_certificacion = $1', [id_certificacion])
    return result.rows[0]
}
module.exports = {
    getAll,
    getById,
    getByUserId,
    createDataProfessional,
    createCertificationProfessional,
    deleteProfessional,
    deleteCertificate,
    getCertificateById
}