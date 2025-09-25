const express = require('express')
const router = express.Router()
const depressionController = require('../controllers/depressionController')
const auth = require('../middlewares/auth.Middleware')
const rolMiddleware = require('../middlewares/rol.middleware')

/**
 * @swagger
 * tags:
 *   name: 6. Depresión - Usuario
 *   description: Endpoints para usuarios autenticados para gestionar su propio registro de depresión
 */

/**
 * @swagger
 * tags:
 *   name: 6. Depresión - Admin/Professional
 *   description: Endpoints para administradores y profesionales para gestionar registros de depresión del sistema
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     DepressionRequest:
 *       type: object
 *       required:
 *         - capacidad_reir_ver_lado_bueno
 *         - mirar_futuro_con_placer
 *         - culparse_sin_necesidad
 *         - ansiedad_preocupacion_sin_motivo
 *         - miedo_panico_sin_motivo
 *         - sensacion_opresion_agobio
 *         - infelicidad_dificultad_dormir
 *         - tristeza_desgracia
 *         - infelicidad_llanto
 *         - pensamientos_autolesion
 *       properties:
 *         capacidad_reir_ver_lado_bueno:
 *           type: integer
 *           enum: [0, 1]
 *           description: Capacidad de reír y ver el lado bueno (0 = NO, 1 = SI)
 *           example: 1
 *         mirar_futuro_con_placer:
 *           type: integer
 *           enum: [0, 1]
 *           description: Mirar el futuro con placer (0 = NO, 1 = SI)
 *           example: 0
 *         culparse_sin_necesidad:
 *           type: integer
 *           enum: [0, 1]
 *           description: Culparse sin necesidad (0 = NO, 1 = SI)
 *           example: 1
 *         ansiedad_preocupacion_sin_motivo:
 *           type: integer
 *           enum: [0, 1]
 *           description: Ansiedad y preocupación sin motivo (0 = NO, 1 = SI)
 *           example: 1
 *         miedo_panico_sin_motivo:
 *           type: integer
 *           enum: [0, 1]
 *           description: Miedo y pánico sin motivo (0 = NO, 1 = SI)
 *           example: 0
 *         sensacion_opresion_agobio:
 *           type: integer
 *           enum: [0, 1]
 *           description: Sensación de opresión y agobio (0 = NO, 1 = SI)
 *           example: 1
 *         infelicidad_dificultad_dormir:
 *           type: integer
 *           enum: [0, 1]
 *           description: Infelicidad y dificultad para dormir (0 = NO, 1 = SI)
 *           example: 1
 *         tristeza_desgracia:
 *           type: integer
 *           enum: [0, 1]
 *           description: Tristeza y desgracia (0 = NO, 1 = SI)
 *           example: 1
 *         infelicidad_llanto:
 *           type: integer
 *           enum: [0, 1]
 *           description: Infelicidad y llanto (0 = NO, 1 = SI)
 *           example: 0
 *         pensamientos_autolesion:
 *           type: integer
 *           enum: [0, 1]
 *           description: Pensamientos de autolesión (0 = NO, 1 = SI)
 *           example: 0
 *     DepressionResponse:
 *       type: object
 *       properties:
 *         id_depresion:
 *           type: integer
 *           description: ID único del registro de depresión
 *           example: 1
 *         id_usuario:
 *           type: integer
 *           description: ID del usuario
 *           example: 5
 *         capacidad_reir_ver_lado_bueno:
 *           type: integer
 *           enum: [0, 1]
 *           description: Capacidad de reír y ver el lado bueno (0 = NO, 1 = SI)
 *           example: 1
 *         mirar_futuro_con_placer:
 *           type: integer
 *           enum: [0, 1]
 *           description: Mirar el futuro con placer (0 = NO, 1 = SI)
 *           example: 0
 *         culparse_sin_necesidad:
 *           type: integer
 *           enum: [0, 1]
 *           description: Culparse sin necesidad (0 = NO, 1 = SI)
 *           example: 1
 *         ansiedad_preocupacion_sin_motivo:
 *           type: integer
 *           enum: [0, 1]
 *           description: Ansiedad y preocupación sin motivo (0 = NO, 1 = SI)
 *           example: 1
 *         miedo_panico_sin_motivo:
 *           type: integer
 *           enum: [0, 1]
 *           description: Miedo y pánico sin motivo (0 = NO, 1 = SI)
 *           example: 0
 *         sensacion_opresion_agobio:
 *           type: integer
 *           enum: [0, 1]
 *           description: Sensación de opresión y agobio (0 = NO, 1 = SI)
 *           example: 1
 *         infelicidad_dificultad_dormir:
 *           type: integer
 *           enum: [0, 1]
 *           description: Infelicidad y dificultad para dormir (0 = NO, 1 = SI)
 *           example: 1
 *         tristeza_desgracia:
 *           type: integer
 *           enum: [0, 1]
 *           description: Tristeza y desgracia (0 = NO, 1 = SI)
 *           example: 1
 *         infelicidad_llanto:
 *           type: integer
 *           enum: [0, 1]
 *           description: Infelicidad y llanto (0 = NO, 1 = SI)
 *           example: 0
 *         pensamientos_autolesion:
 *           type: integer
 *           enum: [0, 1]
 *           description: Pensamientos de autolesión (0 = NO, 1 = SI)
 *           example: 0
 *     DepressionListResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: "Success"
 *         registro_depresion:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/DepressionResponse'
 *         mensaje:
 *           type: string
 *           example: "Consulta exitosa"
 *     DepressionDetailResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: "Success"
 *         registro_depresion:
 *           $ref: '#/components/schemas/DepressionResponse'
 *         mensaje:
 *           type: string
 *           example: "Consulta exitosa"
 */

/**
 * @swagger
 * /api/depression:
 *   get:
 *     summary: Obtener todos los registros de depresión
 *     description: Obtiene una lista completa de todos los registros de depresión en el sistema. Solo accesible por administradores y profesionales
 *     tags: [6. Depresión - Admin/Professional]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DepressionListResponse'
 *             example:
 *               status: "Success"
 *               registro_depresion:
 *                 - id_depresion: 1
 *                   id_usuario: 5
 *                   capacidad_reir_ver_lado_bueno: 1
 *                   mirar_futuro_con_placer: 0
 *                   culparse_sin_necesidad: 1
 *                   ansiedad_preocupacion_sin_motivo: 1
 *                   miedo_panico_sin_motivo: 0
 *                   sensacion_opresion_agobio: 1
 *                   infelicidad_dificultad_dormir: 1
 *                   tristeza_desgracia: 1
 *                   infelicidad_llanto: 0
 *                   pensamientos_autolesion: 0
 *                 - id_depresion: 2
 *                   id_usuario: 8
 *                   capacidad_reir_ver_lado_bueno: 0
 *                   mirar_futuro_con_placer: 0
 *                   culparse_sin_necesidad: 1
 *                   ansiedad_preocupacion_sin_motivo: 1
 *                   miedo_panico_sin_motivo: 1
 *                   sensacion_opresion_agobio: 1
 *                   infelicidad_dificultad_dormir: 1
 *                   tristeza_desgracia: 1
 *                   infelicidad_llanto: 1
 *                   pensamientos_autolesion: 0
 *               mensaje: "Consulta exitosa"
 *       401:
 *         description: Token de autenticación inválido o faltante
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "Token no válido"
 *       403:
 *         description: No tiene permisos para acceder a este recurso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "Acceso denegado"
 *       404:
 *         description: No existen registros de depresión
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No existen registros de depresion"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No se pudieron obtener los registro de depresion"
 */
router.get('/',auth,rolMiddleware.requireAdminOrProfessional,depressionController.getAll)

/**
 * @swagger
 * /api/depression/id/{id}:
 *   get:
 *     summary: Obtener registro de depresión por ID
 *     description: Obtiene un registro específico de depresión utilizando su ID único. Solo accesible por administradores y profesionales
 *     tags: [6. Depresión - Admin/Professional]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID único del registro de depresión
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Registro obtenido exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DepressionDetailResponse'
 *             example:
 *               status: "Success"
 *               registro_depresion:
 *                 id_depresion: 1
 *                 id_usuario: 5
 *                 capacidad_reir_ver_lado_bueno: 1
 *                 mirar_futuro_con_placer: 0
 *                 culparse_sin_necesidad: 1
 *                 ansiedad_preocupacion_sin_motivo: 1
 *                 miedo_panico_sin_motivo: 0
 *                 sensacion_opresion_agobio: 1
 *                 infelicidad_dificultad_dormir: 1
 *                 tristeza_desgracia: 1
 *                 infelicidad_llanto: 0
 *                 pensamientos_autolesion: 0
 *               mensaje: "Consulta exitosa"
 *       401:
 *         description: Token de autenticación inválido o faltante
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "Token no válido"
 *       403:
 *         description: No tiene permisos para acceder a este recurso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "Acceso denegado"
 *       404:
 *         description: Registro de depresión no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No existe este registro de depresion"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No se pudo obtener el registro"
 */
router.get('/id/:id',auth,rolMiddleware.requireAdminOrProfessional,depressionController.getById)

/**
 * @swagger
 * /api/depression/name/{name}:
 *   get:
 *     summary: Obtener registros de depresión por nombre de usuario
 *     description: Obtiene los registros de depresión asociados a un nombre de usuario específico. Solo accesible por administradores y profesionales
 *     tags: [6. Depresión - Admin/Professional]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: Nombre del usuario
 *         schema:
 *           type: string
 *           example: "Juan Pérez"
 *     responses:
 *       200:
 *         description: Registros obtenidos exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DepressionListResponse'
 *             example:
 *               status: "Success"
 *               registro_depresion:
 *                 - id_depresion: 1
 *                   id_usuario: 5
 *                   capacidad_reir_ver_lado_bueno: 1
 *                   mirar_futuro_con_placer: 0
 *                   culparse_sin_necesidad: 1
 *                   ansiedad_preocupacion_sin_motivo: 1
 *                   miedo_panico_sin_motivo: 0
 *                   sensacion_opresion_agobio: 1
 *                   infelicidad_dificultad_dormir: 1
 *                   tristeza_desgracia: 1
 *                   infelicidad_llanto: 0
 *                   pensamientos_autolesion: 0
 *               mensaje: "Consulta exitosa"
 *       401:
 *         description: Token de autenticación inválido o faltante
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "Token no válido"
 *       403:
 *         description: No tiene permisos para acceder a este recurso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "Acceso denegado"
 *       404:
 *         description: Registros de depresión no encontrados para el usuario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No existe este registro de depresion"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No se pudo obtener el registro"
 */
router.get('/name/:name',auth,rolMiddleware.requireAdminOrProfessional,depressionController.getByNameUser)

/**
 * @swagger
 * /api/depression:
 *   post:
 *     summary: Crear registro de depresión
 *     description: Crea un nuevo registro de depresión para el usuario autenticado. Cada usuario solo puede tener un registro de depresión
 *     tags: [6. Depresión - Usuario]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DepressionRequest'
 *           example:
 *             capacidad_reir_ver_lado_bueno: 1
 *             mirar_futuro_con_placer: 0
 *             culparse_sin_necesidad: 1
 *             ansiedad_preocupacion_sin_motivo: 1
 *             miedo_panico_sin_motivo: 0
 *             sensacion_opresion_agobio: 1
 *             infelicidad_dificultad_dormir: 1
 *             tristeza_desgracia: 1
 *             infelicidad_llanto: 0
 *             pensamientos_autolesion: 0
 *     responses:
 *       200:
 *         description: Registro creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DepressionDetailResponse'
 *             example:
 *               status: "Success"
 *               registro_depresion:
 *                 id_depresion: 1
 *                 id_usuario: 5
 *                 capacidad_reir_ver_lado_bueno: 1
 *                 mirar_futuro_con_placer: 0
 *                 culparse_sin_necesidad: 1
 *                 ansiedad_preocupacion_sin_motivo: 1
 *                 miedo_panico_sin_motivo: 0
 *                 sensacion_opresion_agobio: 1
 *                 infelicidad_dificultad_dormir: 1
 *                 tristeza_desgracia: 1
 *                 infelicidad_llanto: 0
 *                 pensamientos_autolesion: 0
 *               mensaje: "Registro exitoso"
 *       400:
 *         description: Datos de entrada inválidos o el usuario ya tiene un registro
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             examples:
 *               missing_fields:
 *                 summary: Campos requeridos faltantes
 *                 value:
 *                   status: "Error"
 *                   mensaje: "Es requerida toda la informacion"
 *               already_exists:
 *                 summary: Usuario ya tiene registro
 *                 value:
 *                   status: "Error"
 *                   mensaje: "Este usuario ya hizo su registro de depresion"
 *       401:
 *         description: Token de autenticación inválido o faltante
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "Token no válido"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No se pudo crear el registro de depresion"
 */
router.post('/',auth,depressionController.createDepression)

/**
 * @swagger
 * /api/depression/{id}:
 *   delete:
 *     summary: Eliminar registro de depresión
 *     description: Elimina un registro específico de depresión por su ID. Solo accesible por administradores y profesionales
 *     tags: [6. Depresión - Admin/Professional]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID único del registro de depresión a eliminar
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Registro eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "Success"
 *                 mensaje:
 *                   type: string
 *                   example: "Eliminado con exito"
 *             example:
 *               status: "Success"
 *               mensaje: "Eliminado con exito"
 *       401:
 *         description: Token de autenticación inválido o faltante
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "Token no válido"
 *       403:
 *         description: No tiene permisos para acceder a este recurso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "Acceso denegado"
 *       404:
 *         description: Registro de depresión no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No existe este registro de depresion"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No se pudo eliminar este registro de depresion"
 */
router.delete('/:id',auth,rolMiddleware.requireAdminOrProfessional,depressionController.deleteDepression)
module.exports = router