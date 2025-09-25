const rolModel = require('../models/rolModel')

//Obtener todos los roles
const getAll = async(req,res)=>{
    try{
        const rol = await rolModel.getAll()
        if(rol.length === 0){
            return res.status(404).json({
                status:'Error',
                mensaje:'No hay roles registrados'
            })
        }
        return res.status(200).json({
            status:'Success',
            roles: rol,
            mensaje:'Consulta exitosa'
        })
    }catch(error){
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo obtener los roles'
        })
    }
}

//Obtener rol por ID 
const getById = async(req,res)=>{
    try{
        const id_rol = req.params.id
        const rol = await rolModel.getById(id_rol)
        if(!rol){
            return res.status(404).json({
                status:'Error',
                mensaje:'No existe este rol'
            })
        }

        return res.status(200).json({
            status:'Success',
            rol:rol,
            mensaje:'Consulta exitosa'
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo obtener el rol'
        })
    }
}

// Obtener rol por nombre
const getByName = async (req, res) => {
    try {
        const nombre = req.params.name
        const rol = await rolModel.getByName(nombre)
        if (rol.length === 0) {
            return res.status(404).json({
                status: 'Error',
                mensaje: 'No se encontró este rol'
            })
        }
        return res.status(200).json({
            status: 'Success',
            data: rol
        })
    } catch (error) {
        return res.status(500).json({
            status: 'Error',
            mensaje: 'No se pudo obtener el rol'
        })
    }
}

const creatRol = async(req,res)=>{
    try{
        const {nombre} = req.body
        if(!nombre){
            return res.status(400).json({
                status:'Error',
                mensaje:'Es requerido el nombre del rol'
            })
        }

        const rol = await rolModel.createRol(nombre)
        return res.status(200).json({
            status:'Success',
            rol:rol,
            mensaje:'Rol creado con exito'
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo crear el rol'
        })
    }
}

//Eliminar Rol
const deleteRol = async(req,res)=>{
    try{
        const id_rol = req.params.id
        const rolExists = await rolModel.getById(id_rol)
        if(!rolExists){
            return res.status(404).json({
                status:'Error',
                mensaje:'No existe este rol'
            })
        }
        const rol = await rolModel.deleteRol(id_rol)
        return res.status(200).json({
            status:'Success',
            mensaje:'Rol eliminado con exito'
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo eliminar el rol'
        })
    }
}
module.exports = {
    getAll,
    getById,
    getByName,
    creatRol,
    deleteRol
}