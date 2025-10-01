const multer = require('multer')
const path = require('path')
const fs = require('fs')

// Configuración de almacenamiento
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join(__dirname, '../uploads/certifications')
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true })
        }
        cb(null, uploadPath)
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const extension = path.extname(file.originalname)
        const filename = 'cert-' + uniqueSuffix + extension
        cb(null, filename)
    }
})

// Filtro de archivos permitidos
const fileFilter = (req, file, cb) => {
    const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'image/png',
        'image/jpg',
        'image/jpeg'
    ]
    
    const allowedExtensions = ['.pdf', '.doc', '.docx', '.png', '.jpg', '.jpeg']
    const extension = path.extname(file.originalname).toLowerCase()
    
    if (allowedTypes.includes(file.mimetype) && allowedExtensions.includes(extension)) {
        cb(null, true)
    } else {
        cb(new Error('Tipo de archivo no permitido. Solo se permiten archivos PDF, Word, PNG, JPG y JPEG'), false)
    }
}

// Configuración de multer
const uploadCertification = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 10 * 1024 * 1024,
        files: 1 
    }
}).single('certification') 

// Middleware para subir certificaciones
const uploadCertificationMiddleware = (req, res, next) => {
    uploadCertification(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            if (err.code === 'LIMIT_FILE_SIZE') {
                return res.status(400).json({
                    error: 'El archivo es demasiado grande. Tamaño máximo: 10MB'
                })
            }
            if (err.code === 'LIMIT_UNEXPECTED_FILE') {
                return res.status(400).json({
                    status:'Error',
                    mensaje: 'Campo de archivo no válido. Use "certification"'
                })
            }
            return res.status(400).json({
                status:'Error',
                mensaje: 'Error al subir archivo'
            })
        } else if (err) {
            return res.status(400).json({
                status:'Error',
                mensaje: err.message
            })
        }
        
        if (!req.file) {
            return res.status(400).json({
                error: 'No se ha subido ningún archivo'
            })
        }
        
        next()
    })
}

// Función para eliminar archivo del sistema
const deleteCertificationFile = async (filename) => {
    if (!filename) {
        return res.status.json({
            status:'Error',
            mensaje:'No existe el archivo'
        })
    }
    
    const filePath = path.join(__dirname, '../uploads/certifications', filename)
    console.log('🔍 Intentando eliminar archivo:', filePath)
    
    try {
        await fs.promises.access(filePath, fs.constants.F_OK)
        await fs.promises.unlink(filePath)
    } catch (error) {
        return res.status(400).json({
            status:'Error',
            mensaje:'No se pudo eliminar el archivo'
        })
    }
}

module.exports = {
    uploadCertificationMiddleware,
    deleteCertificationFile
}