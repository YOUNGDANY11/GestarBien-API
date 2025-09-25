const multer = require('multer')
const path = require('path')
const fs = require('fs')

// Configuración de almacenamiento
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join(__dirname, '../uploads/certifications')
        // Crear directorio si no existe
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true })
        }
        cb(null, uploadPath)
    },
    filename: function (req, file, cb) {
        // Generar nombre único para el archivo
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

// Middleware personalizado para manejo de errores
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
                    error: 'Campo de archivo no válido. Use "certification"'
                })
            }
            return res.status(400).json({
                error: 'Error al subir archivo: ' + err.message
            })
        } else if (err) {
            return res.status(400).json({
                error: err.message
            })
        }
        
        // Verificar que se subió un archivo
        if (!req.file) {
            return res.status(400).json({
                error: 'No se ha subido ningún archivo'
            })
        }
        
        next()
    })
}

// Función para eliminar archivo del sistema
const deleteCertificationFile = (filename) => {
    return new Promise((resolve, reject) => {
        if (!filename) {
            return resolve()
        }
        
        const filePath = path.join(__dirname, '../uploads/certifications', filename)
        
        // Verificar si el archivo existe
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                // El archivo no existe, no es necesario eliminarlo
                return resolve()
            }
            
            // Eliminar el archivo
            fs.unlink(filePath, (err) => {
                if (err) {
                    reject(new Error('Error al eliminar el archivo: ' + err.message))
                } else {
                    resolve()
                }
            })
        })
    })
}

// Función helper para obtener información del archivo subido
const getUploadedFileInfo = (req) => {
    if (!req.file) {
        return null
    }
    
    return {
        filename: req.file.filename,
        originalName: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size,
        path: req.file.path
    }
}

module.exports = {
    uploadCertificationMiddleware,
    deleteCertificationFile,
    getUploadedFileInfo
}