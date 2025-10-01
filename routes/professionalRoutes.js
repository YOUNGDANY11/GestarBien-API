const express = require('express')
const router = express.Router()
const path = require('path')
const professionalController = require('../controllers/professionalController')
const auth = require('../middlewares/auth.Middleware')
const rolMiddleware = require('../middlewares/rol.middleware')
const { uploadCertificationMiddleware } = require('../middlewares/upload.middleware')

/**
 * @swagger
 * /api/professionals:
 *   get:
 *     summary: Obtener todos los profesionales (Solo Admin)
 *     description: Endpoint para que los administradores puedan ver todos los profesionales registrados con sus certificaciones
 *     tags: [7. Profesionales - Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de profesionales obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProfessionalsListResponse'
 *       404:
 *         description: No existen profesionales registrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Token no válido o no proporcionado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: No tienes permisos de administrador
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/',auth,rolMiddleware.requireAdmin,professionalController.getAll)

/**
 * @swagger
 * /api/professionals/id/{id}:
 *   get:
 *     summary: Obtener profesional por ID de usuario (Solo Admin)
 *     description: Endpoint para que los administradores puedan ver los datos de un profesional específico por su ID de usuario
 *     tags: [7. Profesionales - Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario profesional
 *         example: 5
 *     responses:
 *       200:
 *         description: Profesional encontrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProfessionalResponse'
 *       404:
 *         description: No existe este profesional
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Token no válido o no proporcionado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: No tienes permisos de administrador
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/id/:id',auth,rolMiddleware.requireAdmin,professionalController.getByUserId)

/**
 * @swagger
 * /api/professionals/active:
 *   post:
 *     summary: Crear perfil profesional (Solo Profesionales)
 *     description: Endpoint para que los usuarios con rol de profesional puedan crear su perfil profesional con institución y enfoque
 *     tags: [7. Profesionales - Autenticado]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - institucion
 *               - enfoque
 *             properties:
 *               institucion:
 *                 type: string
 *                 description: Institución donde ejerce el profesional
 *                 example: "Universidad Nacional de Colombia"
 *               enfoque:
 *                 type: string
 *                 description: Enfoque o especialidad del profesional
 *                 example: "Psicología Clínica"
 *     responses:
 *       200:
 *         description: Profesional creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProfessionalResponse'
 *       400:
 *         description: Faltan campos requeridos o profesional ya registrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Token no válido o no proporcionado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: No tienes permisos de profesional
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/active',auth,rolMiddleware.requireProfessional,professionalController.createDataByProfessionalActive)

/**
 * @swagger
 * /api/professionals/certification:
 *   post:
 *     summary: Subir certificación profesional (Solo Profesionales)
 *     description: Endpoint para que los profesionales puedan subir sus certificaciones en formato PDF
 *     tags: [7. Profesionales - Autenticado]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - certification
 *             properties:
 *               certification:
 *                 type: string
 *                 format: binary
 *                 description: Archivo PDF de la certificación profesional
 *     responses:
 *       201:
 *         description: Certificación subida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CertificationResponse'
 *       400:
 *         description: No se ha subido ningún archivo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Profesional no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Token no válido o no proporcionado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: No tienes permisos de profesional
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
// Rutas para certificaciones
router.post('/certification',auth,rolMiddleware.requireProfessional,uploadCertificationMiddleware,professionalController.createCertificationProfessional)

/**
 * @swagger
 * /api/professionals/certification/{id}:
 *   delete:
 *     summary: Eliminar certificación profesional (Solo Profesionales)
 *     description: Endpoint para que los profesionales puedan eliminar sus propias certificaciones
 *     tags: [7. Profesionales - Autenticado]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la certificación a eliminar
 *         example: 1
 *     responses:
 *       200:
 *         description: Certificación eliminada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "Success"
 *                 certificacion_eliminada:
 *                   type: object
 *                   properties:
 *                     id_certificacion:
 *                       type: integer
 *                       example: 1
 *                     archivo_eliminado:
 *                       type: boolean
 *                       example: true
 *                     archivo:
 *                       type: string
 *                       example: "cert-1759343285026-440262866.pdf"
 *                 mensaje:
 *                   type: string
 *                   example: "Certificación eliminada exitosamente"
 *       403:
 *         description: No tienes permisos para eliminar esta certificación
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Profesional o certificación no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Token no válido o no proporcionado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.delete('/certification/:id',auth,rolMiddleware.requireProfessional,professionalController.deleteCertificationProfessional)


module.exports = router