const pool = require('../config/db')

//Obtener todos los roles
const getAll = async() =>{
    const result = await pool.query('SELECT * FROM rol')
    return result.rows
}

//Obtener rol por ID
const getById = async(id_rol) =>{
    const result = await pool.query('SELECT * FROM rol WHERE id_rol = $1',[id_rol])
    return result.rows[0]
}


//Obtener rol por nombre
const getByName = async (nombre) => {
    const result = await pool.query('SELECT * FROM rol WHERE nombre ILIKE $1', [`%${nombre}%`])
    return result.rows
}


//Crear Rol
const createRol = async(nombre) =>{
    const result = await pool.query('INSERT INTO rol (nombre) VALUES ($1) RETURNING *',[nombre])
    return result.rows[0]
}


//Eliminar Rol
const deleteRol = async(id_rol) =>{
    const result = await pool.query('DELETE FROM rol WHERE id_rol = $1 RETURNING *',[id_rol])
}

module.exports = {
    getAll,
    getById,
    getByName,
    createRol,
    deleteRol
}