const express = require('express')
const router = express.Router()
const path = require('path')
const professionalController = require('../controllers/professionalController')
const auth = require('../middlewares/auth.Middleware')
const rolMiddleware = require('../middlewares/rol.middleware')
const { uploadCertificationMiddleware } = require('../middlewares/upload.middleware')

router.get('/',auth,rolMiddleware.requireAdmin,professionalController.getAll)
router.get('/id/:id',auth,rolMiddleware.requireAdmin,professionalController.getByUserId)
router.post('/active',auth,rolMiddleware.requireProfessional,professionalController.createDataByProfessionalActive)

// Rutas para certificaciones
router.post('/certification',auth,rolMiddleware.requireProfessional,uploadCertificationMiddleware,professionalController.createCertificationProfessional)
router.delete('/certification/:id',auth,rolMiddleware.requireProfessional,professionalController.deleteCertificationProfessional)

// Ruta para servir archivos de certificación (descargar)
router.get('/certification/file/:filename', auth, (req, res) => {
    const filename = req.params.filename
    const filePath = path.join(__dirname, '../uploads/certifications', filename)
    
    // Verificar si el archivo existe y enviarlo
    res.download(filePath, (err) => {
        if (err) {
            return res.status(404).json({
                status: 'Error',
                mensaje: 'Archivo no encontrado'
            })
        }
    })
})

module.exports = router