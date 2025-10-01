const professionalModel = require('../models/professionalModel')
const { deleteCertificationFile } = require('../middlewares/upload.middleware')

//Obtener todos los profesionales
const getAll = async(req,res)=>{
    try{
        const professional = await professionalModel.getAll()
        if(professional.length === 0){
            return res.status(404).json({
                status:'Error',
                mensaje:'No existe registro de profesionales'
            })
        }
        return res.status(200).json({
            status:'Success',
            profesionales: professional,
            mensaje:'Consulta exitosa'
        })
    }catch(error){
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo obtener a los profesionales'
        })
    }
}

//Obtener por ID de usuario
const getByUserId = async(req,res)=>{
    try{
        const id_usuario = req.params.id
        const professional = await professionalModel.getByUserId(id_usuario)
        if(professional.length === 0){
            return res.status(404).json({
                status:'Error',
                mensaje:'No existe este profesional'
            })
        }

        return res.status(200).json({
            status:'Success',
            profesional:professional,
            mensaje:'Consulta exitosa'
        })
    }catch(error){
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo obtener al profesional'
        })
    }
}

//Crear informacion sobre el profesiona
const createDataByProfessionalActive = async(req,res)=>{
    try{
        const id_usuario = req.user.id_usuario
        const {institucion, enfoque} = req.body
        if(!institucion || !enfoque){
            return res.status(400).json({
                status:'Error',
                mensaje:'Es requerida toda la informacion'
            })
        }
        const existsProfessional = await professionalModel.getByUserId(id_usuario)
        if(existsProfessional){
            return res.status(400).json({
                status:'Error',
                mensaje:'Profesional ya registrado'
            })
        }
        const professional = await professionalModel.createDataProfessional(id_usuario, institucion, enfoque)
        return res.status(200).json({
            status:'Success',
            profesional:professional,
            mensaje:'Profesional creado con exito'
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            status:'Error',
            mensaje:'No se pudo crear el profesional'
        })
    }
}

//Crear certificacion profesional
const createCertificationProfessional = async(req,res)=>{
    try {
        const id_usuario = req.user.id_usuario

        const professional = await professionalModel.getByUserId(id_usuario)
        if (!professional) {
            return res.status(404).json({
                status: 'Error',
                mensaje: 'Profesional no encontrado'
            })
        }

        if (!req.file) {
            return res.status(400).json({
                status: 'Error',
                mensaje: 'No se ha subido ningún archivo'
            })
        }

        const certification = await professionalModel.createCertificationProfessional(
            professional.id_profesional,
            req.file.filename, 
            req.file.originalname
        )
        
        return res.status(201).json({
            status: 'Success',
            certificacion: {
                id_certificacion: certification.id_certificacion,
                archivo: certification.archivo,
                nombre_archivo: certification.nombre_archivo,
                id_profesional: certification.id_profesional
            },
            mensaje: 'Certificación subida exitosamente'
        })
        
    } catch (error) {
        if (req.file) {
            try {
                await deleteCertificationFile(req.file.filename)
                console.log('Archivo eliminado después del error:', req.file.filename)
            } catch (deleteError) {
                console.error('Error al eliminar archivo después del fallo:', deleteError.message)
            }
        }
        
        console.error('Error al crear certificación:', error)
        return res.status(500).json({
            status: 'Error',
            mensaje: 'No se pudo crear la certificación profesional'
        })
    }
}

//Eliminar certificacion profesional
const deleteCertificationProfessional = async(req, res) => {
    try {
        const id_certificacion = req.params.id
        const id_usuario = req.user.id_usuario

        const professional = await professionalModel.getByUserId(id_usuario)
        if (!professional) {
            return res.status(404).json({
                status: 'Error',
                mensaje: 'Profesional no encontrado'
            })
        }

        const certificationToDelete = await professionalModel.getCertificateById(id_certificacion)
        
        if (!certificationToDelete) {
            return res.status(404).json({
                status: 'Error',
                mensaje: 'Certificación no encontrada'
            })
        }

        if (certificationToDelete.id_profesional !== professional.id_profesional) {
            return res.status(403).json({
                status: 'Error',
                mensaje: 'No tienes permisos para eliminar esta certificación'
            })
        }
        
        console.log('Eliminando certificación:', {
            id_certificacion,
            archivo: certificationToDelete.archivo,
            nombre_archivo: certificationToDelete.nombre_archivo
        })

        let fileDeleted = false
        if (certificationToDelete.archivo) {
            try {
                await deleteCertificationFile(certificationToDelete.archivo)
                fileDeleted = true
                console.log('Archivo eliminado exitosamente:', certificationToDelete.archivo)
            } catch (fileError) {
                console.error('Error al eliminar el archivo físico:', fileError.message)
            }
        } else {
            console.warn('No se encontró nombre de archivo para eliminar')
        }
        
        const deletedCertification = await professionalModel.deleteCertificate(id_certificacion)
        
        if (!deletedCertification) {
            return res.status(500).json({
                status: 'Error',
                mensaje: 'No se pudo eliminar la certificación de la base de datos'
            })
        }
        
        return res.status(200).json({
            status: 'Success',
            certificacion_eliminada: {
                id_certificacion: deletedCertification.id_certificacion,
                archivo_eliminado: fileDeleted,
                archivo: deletedCertification.archivo
            },
            mensaje: 'Certificación eliminada exitosamente'
        })
        
    } catch (error) {
        console.error('Error al eliminar certificación:', error)
        return res.status(500).json({
            status: 'Error',
            mensaje: 'No se pudo eliminar la certificación'
        })
    }
}



module.exports = {
    getAll,
    getByUserId,
    createDataByProfessionalActive,
    createCertificationProfessional,
    deleteCertificationProfessional,

}