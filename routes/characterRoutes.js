const express = require('express')
const router = express.Router()
const characterController = require('../controllers/characterController')
const auth = require('../middlewares/auth.Middleware')
const rolMiddleware = require('../middlewares/rol.middleware')

/**
 * @swagger
 * tags:
 *   name: 4. Caracterizaciones - Usuario
 *   description: Endpoints para usuarios autenticados para gestionar su propia caracterización
 */

/**
 * @swagger
 * tags:
 *   name: 4. Caracterizaciones - Admin/Professional
 *   description: Endpoints para administradores y profesionales para gestionar caracterizaciones del sistema
 */

/**
 * @swagger
 * /api/characters:
 *   get:
 *     summary: Obtener todas las caracterizaciones
 *     description: Endpoint para administradores y profesionales para obtener la lista completa de caracterizaciones con información del usuario asociado
 *     tags: [4. Caracterizaciones - Admin/Professional]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de caracterizaciones obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "Success"
 *                 caracterizaciones:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/CharacterResponse'
 *                 mensaje:
 *                   type: string
 *                   example: "Consulta exitosa"
 *       400:
 *         description: No hay registros de caracterización
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No hay registros de caracterizacion"
 *       401:
 *         description: Token no válido o usuario no autenticado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: No tienes permisos para acceder a este recurso (requiere rol Admin o Professional)
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
 *             example:
 *               status: "Error"
 *               mensaje: "No se pudo obtener las caracterizaciones"
 */
router.get('/',auth,rolMiddleware.requireAdminOrProfessional,characterController.getAll)

/**
 * @swagger
 * /api/characters/id/{id}:
 *   get:
 *     summary: Obtener caracterización por ID
 *     description: Endpoint para administradores y profesionales para buscar una caracterización específica por su ID, incluye información del usuario asociado
 *     tags: [4. Caracterizaciones - Admin/Professional]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la caracterización
 *         example: 1
 *     responses:
 *       200:
 *         description: Caracterización encontrada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "Success"
 *                 caracterizacion:
 *                   $ref: '#/components/schemas/CharacterResponse'
 *                 mensaje:
 *                   type: string
 *                   example: "Consulta exitosa"
 *       401:
 *         description: Token no válido o usuario no autenticado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: No tienes permisos para acceder a este recurso (requiere rol Admin o Professional)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Caracterización no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No existe esta caracterizacion"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No se pudo obtener la caracterizacion"
 */
router.get('/id/:id',auth,rolMiddleware.requireAdminOrProfessional,characterController.getById)

/**
 * @swagger
 * /api/characters/name/{name}:
 *   get:
 *     summary: Buscar caracterizaciones por nombre de usuario
 *     description: Endpoint para administradores y profesionales para buscar caracterizaciones filtrando por nombre del usuario asociado (búsqueda parcial)
 *     tags: [4. Caracterizaciones - Admin/Professional]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre o parte del nombre del usuario a buscar
 *         example: "Juan"
 *     responses:
 *       200:
 *         description: Caracterizaciones encontradas exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "Success"
 *                 caracterizacion:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/CharacterResponse'
 *                 mensaje:
 *                   type: string
 *                   example: "Consulta exitosa"
 *       401:
 *         description: Token no válido o usuario no autenticado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: No tienes permisos para acceder a este recurso (requiere rol Admin o Professional)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: No se encontraron caracterizaciones con ese nombre de usuario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No existe esta caracterizacion"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No se pudo obtener la caracterizacion"
 */
router.get('/name/:name',auth,rolMiddleware.requireAdminOrProfessional,characterController.getByNameUser)

/**
 * @swagger
 * /api/characters:
 *   post:
 *     summary: Crear nueva caracterización
 *     description: Endpoint para usuarios autenticados para crear su caracterización personal. Cada usuario solo puede crear una caracterización única.
 *     tags: [4. Caracterizaciones - Usuario]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - lugar_residencia
 *               - estrato
 *               - tipo_vivienda
 *               - condiciones
 *               - afiliacion
 *               - ocupacion
 *               - contrato
 *               - ingresos
 *               - composicion
 *               - estado_civil
 *               - relacion_pareja
 *               - relaciones_familiares
 *               - red_apoyo
 *               - embarazo
 *               - aborto
 *               - maltrato_fisico
 *               - maltrato_psicologico
 *               - abuso_sexual
 *               - sustancias
 *               - ansiedad
 *               - depresion
 *               - otro_trastorno
 *               - psicoterapia
 *               - farmacoterapia
 *               - informacion_adicional
 *               - controles_prenatales
 *               - controles_psicologia
 *             properties:
 *               lugar_residencia:
 *                 type: string
 *                 example: "Bogotá, Colombia"
 *                 description: "Lugar de residencia actual"
 *               estrato:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 6
 *                 example: 3
 *                 description: "Estrato socioeconómico (1-6)"
 *               tipo_vivienda:
 *                 type: string
 *                 example: "Apartamento"
 *                 description: "Tipo de vivienda donde reside"
 *               condiciones:
 *                 type: string
 *                 example: "Buenas condiciones"
 *                 description: "Condiciones generales de la vivienda"
 *               afiliacion:
 *                 type: string
 *                 example: "EPS"
 *                 description: "Tipo de afiliación al sistema de salud"
 *               ocupacion:
 *                 type: string
 *                 example: "Empleado"
 *                 description: "Ocupación laboral actual"
 *               contrato:
 *                 type: string
 *                 example: "Indefinido"
 *                 description: "Tipo de contrato laboral"
 *               ingresos:
 *                 type: string
 *                 example: "1-2 SMLV"
 *                 description: "Rango de ingresos mensuales"
 *               composicion:
 *                 type: string
 *                 example: "Nuclear (pareja e hijos)"
 *                 description: "Composición del núcleo familiar"
 *               estado_civil:
 *                 type: string
 *                 example: "Casado"
 *                 description: "Estado civil actual"
 *               relacion_pareja:
 *                 type: string
 *                 example: "Buena"
 *                 description: "Calidad de la relación de pareja"
 *               relaciones_familiares:
 *                 type: string
 *                 example: "Estables"
 *                 description: "Calidad de las relaciones familiares"
 *               red_apoyo:
 *                 type: string
 *                 example: "Familia y amigos cercanos"
 *                 description: "Red de apoyo social disponible"
 *               embarazo:
 *                 type: integer
 *                 enum: [0, 1]
 *                 example: 0
 *                 description: "Antecedentes de embarazo (0 = No, 1 = Sí)"
 *               aborto:
 *                 type: integer
 *                 enum: [0, 1]
 *                 example: 0
 *                 description: "Antecedentes de aborto (0 = No, 1 = Sí)"
 *               maltrato_fisico:
 *                 type: integer
 *                 enum: [0, 1]
 *                 example: 0
 *                 description: "Antecedentes de maltrato físico (0 = No, 1 = Sí)"
 *               maltrato_psicologico:
 *                 type: integer
 *                 enum: [0, 1]
 *                 example: 0
 *                 description: "Antecedentes de maltrato psicológico (0 = No, 1 = Sí)"
 *               abuso_sexual:
 *                 type: integer
 *                 enum: [0, 1]
 *                 example: 0
 *                 description: "Antecedentes de abuso sexual (0 = No, 1 = Sí)"
 *               sustancias:
 *                 type: integer
 *                 enum: [0, 1]
 *                 example: 0
 *                 description: "Consumo de sustancias psicoactivas (0 = No, 1 = Sí)"
 *               ansiedad:
 *                 type: integer
 *                 enum: [0, 1]
 *                 example: 0
 *                 description: "Diagnóstico de ansiedad (0 = No, 1 = Sí)"
 *               depresion:
 *                 type: integer
 *                 enum: [0, 1]
 *                 example: 0
 *                 description: "Diagnóstico de depresión (0 = No, 1 = Sí)"
 *               otro_trastorno:
 *                 type: integer
 *                 enum: [0, 1]
 *                 example: 0
 *                 description: "Otros trastornos mentales diagnosticados (0 = No, 1 = Sí)"
 *               psicoterapia:
 *                 type: integer
 *                 enum: [0, 1]
 *                 example: 1
 *                 description: "Historial de tratamiento psicoterapéutico (0 = No, 1 = Sí)"
 *               farmacoterapia:
 *                 type: integer
 *                 enum: [0, 1]
 *                 example: 0
 *                 description: "Historial de tratamiento farmacológico (0 = No, 1 = Sí)"
 *               informacion_adicional:
 *                 type: string
 *                 example: "Información relevante adicional"
 *                 description: "Información adicional que considere importante"
 *               controles_prenatales:
 *                 type: integer
 *                 enum: [0, 1]
 *                 example: 0
 *                 description: "Realiza controles prenatales (0 = No, 1 = Sí)"
 *               controles_psicologia:
 *                 type: integer
 *                 enum: [0, 1]
 *                 example: 1
 *                 description: "Realiza controles de psicología (0 = No, 1 = Sí)"
 *     responses:
 *       200:
 *         description: Caracterización creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "Success"
 *                 caracterizacion:
 *                   $ref: '#/components/schemas/Character'
 *                 mensaje:
 *                   type: string
 *                   example: "Caracterizacion exitosa"
 *       400:
 *         description: Faltan campos requeridos o el usuario ya tiene una caracterización
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             examples:
 *               missing_fields:
 *                 summary: Campos faltantes
 *                 value:
 *                   status: "Error"
 *                   mensaje: "Es requerida toda la informacion"
 *               already_exists:
 *                 summary: Usuario ya tiene caracterización
 *                 value:
 *                   status: "Error"
 *                   mensaje: "Este usuario ya hizo su caracterizacion"
 *       401:
 *         description: Token no válido o usuario no autenticado
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
 *             example:
 *               status: "Error"
 *               mensaje: "No se pudo crear la caracterizacion"
 */
router.post('/',auth,characterController.createCharacter)

/**
 * @swagger
 * /api/characters/{id}:
 *   delete:
 *     summary: Eliminar caracterización por ID
 *     description: Endpoint para administradores y profesionales para eliminar una caracterización específica del sistema
 *     tags: [4. Caracterizaciones - Admin/Professional]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la caracterización a eliminar
 *         example: 1
 *     responses:
 *       200:
 *         description: Caracterización eliminada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "Success"
 *                 caracterizacion:
 *                   $ref: '#/components/schemas/Character'
 *                 mensaje:
 *                   type: string
 *                   example: "Caracterizacion eliminada con exito"
 *       401:
 *         description: Token no válido o usuario no autenticado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: No tienes permisos para acceder a este recurso (requiere rol Admin o Professional)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Caracterización no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No existe la caracterizacion"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No se pudo eliminar la caracterizacion"
 */
router.delete('/:id',auth,rolMiddleware.requireAdminOrProfessional,characterController.deleteCharacter)

module.exports = router