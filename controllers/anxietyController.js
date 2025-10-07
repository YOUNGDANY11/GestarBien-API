const anxietyModel = require('../models/anxietyModel')

//Obtener todos los registros de ansiedad
const getAll = async(req,res)=>{
    try{
        const anxiety = await anxietyModel.getAll()
        if(anxiety.length === 0){
            return res.status(404).json({
                status:'Error',
                mensaje:'No existen registros de ansiedad'
            })
        }

        return res.status(200).json({
            status:'Success',
            registros_ansiedad:anxiety,
            mensaje:'Consulta exitosa'
        })
    }catch(error){
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudieron obtener los registros de ansiedad'
        })
    }
}

//Obtener registro por ID
const getById = async(req,res)=>{
    try{
        const id_ansiedad = req.params.id
        const anxiety = await anxietyModel.getById(id_ansiedad)
        if(!anxiety){
            return res.status(404).json({
                status:'Error',
                mensaje:'No existe este registro de ansiedad'
            })
        }

        return res.status(200).json({
            status:'Success',
            registro_ansiedad:anxiety,
            mensaje:'Consulta exitosa'
        })
    }catch(error){
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo obtener este registro de ansiedad'
        })
    }
}

//Obtener registro por nombre de usuario
const getByNameUser = async(req,res)=>{
    try{
        const nombreUsuario = req.params.name
        const anxiety = await anxietyModel.getByNameUser(nombreUsuario)
        if(anxiety.length === 0){
            return res.status(404).json({
                status:'Error',
                mensaje:'No existe este registro de ansiedad'
            })
        }

        return res.status(200).json({
            status:'Success',
            registro_ansiedad: anxiety,
            mensaje:'Consulta exitosa'
        })
    }catch(error){
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo obtener este registro de ansiedad'
        })
    }
}

//Crear registro de ansiedad
const createAnxiety = async(req,res)=>{
    try{
        const id_usuario = req.user.id_usuario
        const { 
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
        } = req.body

        // Validar que todos los campos estén presentes y sean 0 o 1
        const requiredFields = [
            'preocupacion_bienestar_propio', 'miedo_dano_futuro', 'temor_malo_suceda', 
            'preocupacion_muchas_cosas', 'preocupacion_futuro', 'sentirse_desbordado', 
            'miedo_mente_bloquee', 'agobios_estres_incomodidad', 'preocupacion_empleo', 
            'dificultad_dormir', 'hacer_cosas_cierto_orden', 'busqueda_perfeccion', 
            'necesidad_control', 'dificultad_dejar_revisar', 'nerviosismo_sobresalto', 
            'preocupacion_pensamientos_repetitivos', 'estar_guardia_atenta', 'molestia_recuerdos_suenos', 
            'preocupacion_verguenza', 'miedo_juicio_negativo', 'incomodidad_multitudes', 
            'evitar_actividades_sociales', 'evitar_cosas_preocupan', 'desapego_irrealidad', 
            'perdida_tiempo_memoria', 'dificultad_adaptar_cambios', 'ansiedad_dificulta_actividades', 
            'pensamientos_acelerados', 'miedo_perder_control', 'sentimiento_panico', 'agitacion'
        ]

        for (let field of requiredFields) {
            const value = req.body[field]
            if (value === undefined || value === null || ![1, 2, 3, 4].includes(value)) {
                return res.status(400).json({
                    status: 'Error',
                    mensaje: `El campo ${field} es requerido y debe ser 1 (Nunca), 2 (Algunas veces), 3 (Con frecuencia) o 4 (Casi siempre)`
                })
            }
        }
        const existsAnxiety = await anxietyModel.getByUserId(id_usuario)
        if(existsAnxiety){
            return res.status(400).json({
                status:'Error',
                mensaje:'Este usuario ya hizo su registro de ansiedad'
            })
        }

        const anxiety = await anxietyModel.createAnxiety(
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
        )
        return res.status(200).json({
            status:'Success',
            registro_ansiedad: anxiety,
            mensaje:'Registro de ansiedad creado exitosamente'
        })
    }catch(error){
        console.error('Error en createAnxiety:', error)
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo crear el registro de ansiedad'
        })
    }
}

//Eliminar registro de ansiedad
const deleteAnxiety = async(req,res)=>{
    try{
        const id_ansiedad = req.params.id
        const existsAnxiety = await anxietyModel.getById(id_ansiedad)
        if(!existsAnxiety){
            return res.status(404).json({
                status:'Error',
                mensaje:'No existe este registro'
            })
        }

        const anxiety = await anxietyModel.deleteAnxiety(id_ansiedad)
        return res.status(200).json({
            status:'Success',
            mensaje:'Eliminado con exito'
        })
    }catch(error){
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo eliminar el registro de ansiedad'
        })
    }
}
module.exports = {
    getAll,
    getById,
    getByNameUser,
    createAnxiety,
    deleteAnxiety
}