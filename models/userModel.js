const pool = require('../config/db')

//Consultar todos los usuarios
const getAllUsers = async() =>{
    const result = await pool.query('SELECT * FROM usuario')
    return result.rows
}

//Consultar usuario por ID
const getUserById = async(id_usuario) =>{
    const result = await pool.query('SELECT * FROM usuario WHERE id_usuario = $1',[id_usuario])
    return result.rows[0]
}

//Consultar usuario por correo
const getUserByEmail = async(correo) =>{
    const result = await pool.query('SELECT * FROM usuario WHERE correo ILIKE $1',[`%${correo}%`])
    return result.rows
}

//Consultar usuario por nombre
const getUserByName = async(nombre) =>{
    const result = await pool.query('SELECT * FROM usuario WHERE nombre ILIKE $1',[`%${nombre}%`])
    return result.rows
}

//Consultar usuario por numero de documento
const getUserByDocumentId = async(cedula)=>{
    const result = await pool.query('SELECT * FROM usuario WHERE cedula ILIKE $1',[`%${cedula}%`])
    return result.rows
}

//Crear usuario
const registerUser = async(id_rol,correo,contrasenaHash,nombre,fecha_nacimiento,celular,cedula) =>{
    const result = await pool.query('INSERT INTO usuario (id_rol,correo,contrasena,nombre,fecha_nacimiento,celular,cedula) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',[id_rol || 3,correo,contrasenaHash,nombre,fecha_nacimiento,celular,cedula])
    return result.rows[0]
}

//Actualizar usuario
const updateUser = async(id_rol,correo,nombre,fecha_nacimiento,celular,cedula,id_usuario)=>{
    const result = await pool.query('UPDATE usuario SET id_rol = $1, correo = $2, nombre = $3, fecha_nacimiento = $4, celular = $5, cedula = $6 WHERE id_usuario = $7 RETURNING *',[id_rol,correo,nombre,fecha_nacimiento,celular,cedula,id_usuario])
    return result.rows[0]
}

//Actualizar contraseña
const updatePassword = async(contrasenaHash,id_usuario) => {
    const result = await pool.query('UPDATE usuario SET contrasena = $1 WHERE id_usuario = $2 RETURNING *',[contrasenaHash,id_usuario])
    return result.rows[0]
}

//Eliminar usuario
const deleteUser = async(id_usuario)=>{
    const result = await pool.query('DELETE FROM usuario WHERE id_usuario = $1 RETURNING *',[id_usuario])
    return result.rows[0]
}

module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    getUserByName,
    getUserByDocumentId,
    registerUser,
    updateUser,
    updatePassword,
    deleteUser
}