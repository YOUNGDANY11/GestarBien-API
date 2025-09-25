const userModel = require('../models/userModel')
const bcrypt = require('bcryptjs')

//Obtener todos los usuarios
const getAllUsers = async(req,res)=>{
    try{
        const users = await userModel.getAllUsers()

        if(users.length === 0){
            return res.status(404).json({
                status:'Error',
                mensaje:'No hay usuarios registrados'
            })
        }
        return res.status(200).json({
            status:'Success',
            usuarios: users,
            mensaje:'Consulta exitosa'
        })
    }catch(error){
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo obtener los usuarios'
        })
    }
}

//Obtener usuario por ID 
const getUserById = async(req,res)=>{
    try{
        const id_usuario = req.params.id
        const user = await userModel.getUserById(id_usuario)
        if(!user){
            return res.status(404).json({
                status:'Error',
                mensaje:'Usuario no encontrado o no registrado'
            })
        }

        return res.status(200).json({
            status:'Success',
            usuario:user,
            mensaje:'Consulta exitosa'
        })
    }catch(error){
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo obtener el usuario'
        })
    }
}

//Obtener usuario por correo
const getUserByEmail = async(req,res)=>{
    try{
        const correo = req.params.email
        const user = await userModel.getUserByEmail(correo)
        if(user.length === 0){
            return res.status(404).json({
                status:'Error',
                mensaje:'Usuario no encontrado o no registrado'
            })
        }

        return res.status(200).json({
            status:'Success',
            usuario: user,
            mensaje:'Consulta exitosa'
        })
    }catch(error){
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo  obtener el usuario'
        })
    }
}

//Obtener usuario por nombre
const getUserByName = async(req,res)=>{
    try{
        const nombre = req.params.name
        const user = await userModel.getUserByName(nombre)
        if(user.length === 0){
            return res.status(404).json({
                status:'Error',
                mensaje:'Usuario no encontrado o no registrado'
            })
        }

        return res.status(200).json({
            status:'Success',
            usuario: user,
            mensaje:'Consulta exitosa'
        })
    }catch(error){
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo  obtener el usuario'
        })
    }
}

//Obtener usuario por Documento de identidad
const getUserByDocumentId = async(req,res)=>{
    try{
        const cedula = req.params.doc
        const user = await userModel.getUserByDocumentId(cedula)
        if(user.length === 0){
            return res.status(404).json({
                status:'Error',
                mensaje:'Usuario no encontrado o no registrado'
            })
        }

        return res.status(200).json({
            status:'Success',
            usuario: user,
            mensaje:'Consulta exitosa'
        })
    }catch(error){
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo  obtener el usuario'
        })
    }
}

//Obtener datos del usuario activo
const getByActiveUser = async(req,res)=>{
    try{
        const id_usuario = req.user.id_usuario
        const user = await userModel.getUserById(id_usuario)
        if(!user){
            return res.status(404).json({
                status:'Error',
                mensaje:'No existe el usuario'
            })
        }
        return res.status(200).json({
            status:'Success',
            usuario:user,
            mensaje:'Consulta exitosa'
        })
    }catch(error){
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo obtener la informacion del usuario'
        })
    }
}

//Crear usuario
const registerUser = async(req,res)=>{
    try{
        const {id_rol, correo, contrasena, nombre, fecha_nacimiento, celular, cedula} = req.body
        if(!correo || !contrasena || !nombre || !fecha_nacimiento || !celular || !cedula){
            return res.status(400).json({
                status:'Error',
                mensaje:'Hace falta informacion'
            })
        }

        const existsEmail = await userModel.getUserByEmail(correo)
        if(existsEmail.length > 0){
            return res.status(403).json({
                status:'Error',
                mensaje:'Correo ya registrado'
            })
        }
        const existsDocument = await userModel.getUserByDocumentId(cedula)
        if(existsDocument.length > 0){
            return res.status(403).json({
                status:'Error',
                mensaje:'Documendo de identidad ya registrado'
            })
        }

        const contrasenaHash = await bcrypt.hash(contrasena,10)
        const user = await userModel.registerUser(id_rol,correo,contrasenaHash,nombre,fecha_nacimiento,celular,cedula)
        return res.status(200).json({
            status:'Success',
            usuario:user,
            mensaje:'Registrado con exito'
        })
    }catch(error){
        console.log(error)

        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo crear el usuario'
        })
    }
}

//Actualizar usuario 
const updateUser = async (req, res) => {
    try {
        const id_usuario = req.params.id
        const { id_rol, correo, nombre, fecha_nacimiento, celular, cedula } = req.body

        if (!id_rol || !correo || !nombre || !fecha_nacimiento || !celular || !cedula) {
            return res.status(400).json({
                status: 'Error',
                mensaje: 'Es requerida toda la información'
            })
        }

        const user = await userModel.getUserById(id_usuario)
        if (!user) {
            return res.status(404).json({
                status: 'Error',
                mensaje: 'Usuario no encontrado'
            })
        }

        const usersWithEmail = await userModel.getUserByEmail(correo)

        const emailInUse = usersWithEmail.find(u => u.id_usuario != id_usuario)
        if (emailInUse) {
            return res.status(400).json({
                status: 'Error',
                mensaje: 'Correo ya registrado por otro usuario'
            })
        }

        const usersWithDocument = await userModel.getUserByDocumentId(cedula)
        const documentInUse = usersWithDocument.find(u => u.id_usuario != id_usuario)
        if (documentInUse) {
            return res.status(400).json({
                status: 'Error',
                mensaje: 'Documento de identidad ya registrado por otro usuario'
            })
        }
        const updatedUser = await userModel.updateUser(id_rol,correo,nombre,fecha_nacimiento,celular,cedula,id_usuario)

        return res.status(200).json({
            status: 'Success',
            usuario: updatedUser,
            mensaje: 'Actualizado con éxito'
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 'Error',
            mensaje: 'No se pudo actualizar el usuario'
        })
    }
}


//Actualizar contraseña por admin
const updatePasswordByAdmin = async(req,res)=>{
    try{
        const id_usuario = req.params.id
        const {contrasena} = req.body
        if(!contrasena){
            return res.status(400).json({
                status:'Error',
                mensaje:'Es requerida la contraseña'
            })
        }
        const existsUser = await userModel.getUserById(id_usuario)
        if(!existsUser){
            return res.status(404).json({
                status:'Error',
                mensaje:'Usuario no encontrado o no existente'
            })
        }
        const contrasenaHash = await bcrypt.hash(contrasena,10)
        const user = await userModel.updatePassword(contrasenaHash,id_usuario)
        return res.status(200).json({
            status:'Success',
            mensaje:'Contraseña actualizada',
            user
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo actualizar la contraseña'
        })
    }
}


//Actualizar contraseña por usuario activo
const updatePassword = async(req,res)=>{
    try{
        const id_usuario = req.user.id_usuario
        const {contrasena} = req.body
        if(!contrasena){
            return res.status(400).json({
                status:'Error',
                mensaje:'Es requerida la contraseña'
            })
        }

        const existsUser = await userModel.getUserById(id_usuario)
        if(!existsUser){
            return res.status(404).json({
                status:'Error',
                mensaje:'Usuario no encontrado'
            })
        }

        const contrasenaHash = await bcrypt.hash(contrasena,10)
        const user = await userModel.updatePassword(contrasenaHash,id_usuario)
        
        if(!user){
            return res.status(500).json({
                status:'Error',
                mensaje:'No se pudo actualizar la contraseña'
            })
        }

        return res.status(200).json({
            status:'Success',
            mensaje:'Contraseña actualizada con éxito',
            user
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo actualizar la contraseña'
        })
    }
}

//Eliminar usuario
const deleteUser = async(req,res)=>{
    try{
        const id_usuario = req.params.id
        const user = await userModel.deleteUser(id_usuario)
        if(!user){
            return res.status(404).json({
                status:'Error',
                mensaje:'Usuario no encontrado o no existe'
            })
        }
        return res.status(200).json({
            status:'Success',
            usuario:user,
            mensaje:'Eliminado con exito'
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo eliminar el usuario'
        })
    }
}
module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    getUserByName,
    getUserByDocumentId,
    getByActiveUser,
    registerUser,
    updateUser,
    updatePasswordByAdmin,
    updatePassword,
    deleteUser
}