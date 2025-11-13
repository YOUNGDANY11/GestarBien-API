const depressionModel = require('../models/depressionModel')

//Obtener todos los registros de depresion
const getAll = async(req,res)=>{
    try{
        const depression = await depressionModel.getAll()
        if(depression.length === 0){
            return res.status(404).json({
                status:'Error',
                mensaje:'No existen registros de depresion'
            })
        }

        return res.status(200).json({
            status:'Success',
            registro_depresion: depression,
            mensaje:'Consulta exitosa'
        })
    }catch(error){  
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudieron obtener los registro de depresion'
        })
    }
}

//Obtener por ID
const getById = async(req,res)=>{
    try{
        const id_depresion = req.params.id
        const depression = await depressionModel.getById(id_depresion)
        if(!depression){
            return res.status(404).json({
                status:'Error',
                mensaje:'No existe este registro de depresion'
            })
        }

        return res.status(200).json({
            status:'Success',
            registro_depresion:depression,
            mensaje:'Consulta exitosa'
        })
    }catch(error){
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo obtener el registro'
        })
    }
}

//Obtener por nombre de usuario
const getByNameUser = async(req,res)=>{
    try{
        const nombreUsuario = req.params.name
        const depression = await depressionModel.getByNameUser(nombreUsuario)
        if(depression.length === 0){
            return res.status(404).json({
                status:'Error',
                mensaje:'No existe este registro de depresion'
            })
        }
        return res.status(200).json({
            status:'Success',
            registro_depresion:depression,
            mensaje:'Consulta exitosa'
        })
    }catch(error){
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo obtener el registro'
        })
    }
}

const getByUserIdActive = async(req,res)=>{
    try{
        const {id_usuario} = req.user
        const depression = await depressionModel.getByUserId(id_usuario)
        if(!depression){
            return res.status(404).json({
                status:'Error',
                mensaje:'No existe este registro de depresion'
            })
        }
        return res.status(200).json({
            status:'Success',
            registro_depresion:depression,
            mensaje:'Consulta exitosa'
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo obtener el registro'
        })
    }
}


//crear registro de depresion
const createDepression = async(req,res)=>{
    try{
        const id_usuario = req.user.id_usuario
        const {
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
        } = req.body

        const requiredFields = [
            'capacidad_reir_ver_lado_bueno', 'mirar_futuro_con_placer', 'culparse_sin_necesidad', 
            'ansiedad_preocupacion_sin_motivo', 'miedo_panico_sin_motivo', 'sensacion_opresion_agobio', 
            'infelicidad_dificultad_dormir', 'tristeza_desgracia', 'infelicidad_llanto', 'pensamientos_autolesion'
        ]

        for (let field of requiredFields) {
            const value = req.body[field]
            if (value === undefined || value === null || ![1, 2, 3, 4].includes(value)) {
                return res.status(400).json({
                    status: 'Error',
                    mensaje: `El campo ${field} es requerido y debe ser 1, 2, 3 o 4`
                })
            }
        }

        const existsDepression = await depressionModel.getByUserId(id_usuario)
        if(existsDepression){
            return res.status(400).json({
                status:'Error',
                mensaje:'Este usuario ya hizo su registro de depresion'
            })
        }

        const depression = await depressionModel.createDepression(
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
        )
        
        return res.status(200).json({
            status:'Success',
            registro_depresion:depression,
            mensaje:'Registro de depresión creado exitosamente'
        })
    }catch(error){
        console.error('Error en createDepression:', error)
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo crear el registro de depresión'
        })
    }
}

//Eliminar registro depresion
const deleteDepression = async(req,res)=>{
    try{
        const id_depresion = req.params.id
        const existsDepression = await depressionModel.getById(id_depresion)
        if(!existsDepression){
            return res.status(404).json({
                status:'Error',
                mensaje:'No existe este registro de depresion'
            })
        }

        const depression = await depressionModel.deleteDepression(id_depresion)
        return res.status(200).json({
            status:'Success',
            mensaje:'Eliminado con exito'
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo eliminar este registro de depresion'
        })
    }
}
module.exports = {
    getAll,
    getById,
    getByNameUser,
    getByUserIdActive,
    createDepression,
    deleteDepression
}