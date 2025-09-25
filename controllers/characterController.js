const characterModel = require('../models/characterModel')

//Obtener todas las caracterizacions
const getAll = async (req, res) => {
    try {
        const caracterizaciones = await characterModel.getAll()
        
        if (!caracterizaciones || caracterizaciones.length === 0) {
            return res.status(400).json({
                status: 'Error',
                mensaje: 'No hay registros de caracterización'
            })
        }
        return res.status(200).json({
            status: 'Success',
            caracterizaciones,
            mensaje: 'Consulta exitosa'
        })
    } catch (error) {
        return res.status(500).json({
            status: 'Error',
            mensaje: 'No se pudo obtener las caracterizaciones'
        })
    }
}

//Obtener por ID 
const getById = async(req,res)=>{
    try{
        const id_caracterizacion = req.params.id
        const character = await characterModel.getById(id_caracterizacion)
        if(!character){
            return res.status(404).json({
                status:'Error',
                mensaje:'No existe esta caracterizacion'
            })
        }

        return res.status(200).json({
            status:'Success',
            caracterizacion: character,
            mensaje:'Consulta exitosa'
        })
    }catch(error){
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo obtener la caracterizacion'
        })
    }
}

//Obtener por nombre de usuario
const getByNameUser = async(req,res)=>{
    try{
        const nombreUsuario = req.params.name
        const character = await characterModel.getByNameUser(nombreUsuario)
        if(character.length === 0){
            return res.status(404).json({
                status:'Error',
                mensaje:'No existe esta caracterizacion'
            })
        }

        return res.status(200).json({
            status:'Success',
            caracterizacion:character,
            mensaje:'Consulta exitosa'
        })
    }catch(error){
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo obtener la caracterizacion'
        })
    }
}

//Crear caracterizacion
const createCharacter = async(req,res)=>{
    try{
        const id_usuario = req.user.id_usuario
        const {lugar_residencia, estrato, tipo_vivienda, condiciones, afiliacion, ocupacion, contrato, ingresos, composicion, estado_civil, relacion_pareja, relaciones_familiares, red_apoyo, embarazo, aborto, maltrato_fisico, maltrato_psicologico, abuso_sexual, sustancias, ansiedad, depresion, otro_trastorno, psicoterapia, farmacoterapia, informacion_adicional, controles_prenatales, controles_psicologia } =req.body
        if (!lugar_residencia || !estrato || !tipo_vivienda || !condiciones || !afiliacion || !ocupacion || !contrato || !ingresos || !composicion || !estado_civil || !relacion_pareja || !relaciones_familiares || !red_apoyo || !embarazo || !aborto || !maltrato_fisico || !maltrato_psicologico || !abuso_sexual || !sustancias || !ansiedad || !depresion || !otro_trastorno || !psicoterapia || !farmacoterapia || !informacion_adicional || !controles_prenatales || !controles_psicologia) {
            return res.status(400).json({
                status:'Error',
                mensaje:'Es requerida toda la informacion'
            })
        }
        const existsCharacter = await characterModel.getByUserId(id_usuario)
        if(existsCharacter){
            return res.status(400).json({
                status:'Error',
                mensaje:'Este usuario ya hizo su caracterizacion'
            })
        }
        const character = await characterModel.createCharacter(id_usuario,lugar_residencia, estrato, tipo_vivienda, condiciones, afiliacion, ocupacion, contrato, ingresos, composicion, estado_civil, relacion_pareja, relaciones_familiares, red_apoyo, embarazo, aborto, maltrato_fisico, maltrato_psicologico, abuso_sexual, sustancias, ansiedad, depresion, otro_trastorno, psicoterapia, farmacoterapia, informacion_adicional, controles_prenatales, controles_psicologia )
        return res.status(200).json({
            status:'Success',
            caracterizacion:character,
            mensaje:'Caracterizacion exitosa'
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo crear la caracterizacion'
        })
    }
}

//Eliminar caracterizacion
const deleteCharacter = async(req,res)=>{
    try{
        const id_caracterizacion = req.params.id
        const existsCharacter = await characterModel.getById(id_caracterizacion)
        if(existsCharacter.length === 0){
            return res.status(404).json({
                status:'Error',
                mensaje:'No existe la caracterizacion'
            })
        }
        const character = await characterModel.deleteCharacter(id_caracterizacion)
        return res.status(200).json({
            status:'Success',
            caracterizacion: character,
            mensaje:'Caracterizacion eliminada con exito'
        })
    }catch(error){
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo eliminar la caracterizacion'
        })
    }
}
module.exports = {
    getAll,
    getById,
    getByNameUser,
    createCharacter,
    deleteCharacter
}