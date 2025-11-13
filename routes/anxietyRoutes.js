const express = require('express')
const router = express.Router()
const anxietyController = require('../controllers/anxietyController')
const auth = require('../middlewares/auth.Middleware')
const rolMiddleware = require('../middlewares/rol.middleware')

/**
 * @swagger
 * tags:
 *   name: 5. Ansiedad - Usuario
 *   description: Endpoints para usuarios autenticados para gestionar su propio registro de ansiedad
 */

/**
 * @swagger
 * tags:
 *   name: 5. Ansiedad - Admin/Professional
 *   description: Endpoints para administradores y profesionales para gestionar registros de ansiedad del sistema
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     AnxietyRequest:
 *       type: object
 *       required:
 *         - preocupacion_bienestar_propio
 *         - miedo_dano_futuro
 *         - temor_malo_suceda
 *         - preocupacion_muchas_cosas
 *         - preocupacion_futuro
 *         - sentirse_desbordado
 *         - miedo_mente_bloquee
 *         - agobios_estres_incomodidad
 *         - preocupacion_empleo
 *         - dificultad_dormir
 *         - hacer_cosas_cierto_orden
 *         - busqueda_perfeccion
 *         - necesidad_control
 *         - dificultad_dejar_revisar
 *         - nerviosismo_sobresalto
 *         - preocupacion_pensamientos_repetitivos
 *         - estar_guardia_atenta
 *         - molestia_recuerdos_suenos
 *         - preocupacion_verguenza
 *         - miedo_juicio_negativo
 *         - incomodidad_multitudes
 *         - evitar_actividades_sociales
 *         - evitar_cosas_preocupan
 *         - desapego_irrealidad
 *         - perdida_tiempo_memoria
 *         - dificultad_adaptar_cambios
 *         - ansiedad_dificulta_actividades
 *         - pensamientos_acelerados
 *         - miedo_perder_control
 *         - sentimiento_panico
 *         - agitacion
 *       properties:
 *         preocupacion_bienestar_propio:
 *           type: integer
 *           enum: [0, 1]
 *           description: Preocupación por bienestar propio (0 = NO, 1 = SI)
 *           example: 1
 *         miedo_dano_futuro:
 *           type: integer
 *           enum: [0, 1]
 *           description: Miedo a daño futuro (0 = NO, 1 = SI)
 *           example: 0
 *         temor_malo_suceda:
 *           type: integer
 *           enum: [0, 1]
 *           description: Temor a que algo malo suceda (0 = NO, 1 = SI)
 *           example: 1
 *         preocupacion_muchas_cosas:
 *           type: integer
 *           enum: [0, 1]
 *           description: Preocupación por muchas cosas (0 = NO, 1 = SI)
 *           example: 1
 *         preocupacion_futuro:
 *           type: integer
 *           enum: [0, 1]
 *           description: Preocupación por el futuro (0 = NO, 1 = SI)
 *           example: 1
 *         sentirse_desbordado:
 *           type: integer
 *           enum: [0, 1]
 *           description: Sentirse desbordado (0 = NO, 1 = SI)
 *           example: 0
 *         miedo_mente_bloquee:
 *           type: integer
 *           enum: [0, 1]
 *           description: Miedo a que la mente se bloquee (0 = NO, 1 = SI)
 *           example: 1
 *         agobios_estres_incomodidad:
 *           type: integer
 *           enum: [0, 1]
 *           description: Agobios, estrés e incomodidad (0 = NO, 1 = SI)
 *           example: 1
 *         preocupacion_empleo:
 *           type: integer
 *           enum: [0, 1]
 *           description: Preocupación por el empleo (0 = NO, 1 = SI)
 *           example: 0
 *         dificultad_dormir:
 *           type: integer
 *           enum: [0, 1]
 *           description: Dificultad para dormir (0 = NO, 1 = SI)
 *           example: 1
 *         hacer_cosas_cierto_orden:
 *           type: integer
 *           enum: [0, 1]
 *           description: Necesidad de hacer cosas en cierto orden (0 = NO, 1 = SI)
 *           example: 0
 *         busqueda_perfeccion:
 *           type: integer
 *           enum: [0, 1]
 *           description: Búsqueda de perfección (0 = NO, 1 = SI)
 *           example: 1
 *         necesidad_control:
 *           type: integer
 *           enum: [0, 1]
 *           description: Necesidad de control (0 = NO, 1 = SI)
 *           example: 1
 *         dificultad_dejar_revisar:
 *           type: integer
 *           enum: [0, 1]
 *           description: Dificultad para dejar de revisar (0 = NO, 1 = SI)
 *           example: 0
 *         nerviosismo_sobresalto:
 *           type: integer
 *           enum: [0, 1]
 *           description: Nerviosismo y sobresalto (0 = NO, 1 = SI)
 *           example: 1
 *         preocupacion_pensamientos_repetitivos:
 *           type: integer
 *           enum: [0, 1]
 *           description: Preocupación por pensamientos repetitivos (0 = NO, 1 = SI)
 *           example: 1
 *         estar_guardia_atenta:
 *           type: integer
 *           enum: [0, 1]
 *           description: Estar en guardia o atenta (0 = NO, 1 = SI)
 *           example: 1
 *         molestia_recuerdos_suenos:
 *           type: integer
 *           enum: [0, 1]
 *           description: Molestia por recuerdos o sueños (0 = NO, 1 = SI)
 *           example: 0
 *         preocupacion_verguenza:
 *           type: integer
 *           enum: [0, 1]
 *           description: Preocupación por la vergüenza (0 = NO, 1 = SI)
 *           example: 1
 *         miedo_juicio_negativo:
 *           type: integer
 *           enum: [0, 1]
 *           description: Miedo al juicio negativo (0 = NO, 1 = SI)
 *           example: 1
 *         incomodidad_multitudes:
 *           type: integer
 *           enum: [0, 1]
 *           description: Incomodidad en multitudes (0 = NO, 1 = SI)
 *           example: 0
 *         evitar_actividades_sociales:
 *           type: integer
 *           enum: [0, 1]
 *           description: Evitar actividades sociales (0 = NO, 1 = SI)
 *           example: 1
 *         evitar_cosas_preocupan:
 *           type: integer
 *           enum: [0, 1]
 *           description: Evitar cosas que preocupan (0 = NO, 1 = SI)
 *           example: 1
 *         desapego_irrealidad:
 *           type: integer
 *           enum: [0, 1]
 *           description: Desapego o irrealidad (0 = NO, 1 = SI)
 *           example: 0
 *         perdida_tiempo_memoria:
 *           type: integer
 *           enum: [0, 1]
 *           description: Pérdida de tiempo o memoria (0 = NO, 1 = SI)
 *           example: 0
 *         dificultad_adaptar_cambios:
 *           type: integer
 *           enum: [0, 1]
 *           description: Dificultad para adaptarse a cambios (0 = NO, 1 = SI)
 *           example: 1
 *         ansiedad_dificulta_actividades:
 *           type: integer
 *           enum: [0, 1]
 *           description: La ansiedad dificulta actividades (0 = NO, 1 = SI)
 *           example: 1
 *         pensamientos_acelerados:
 *           type: integer
 *           enum: [0, 1]
 *           description: Pensamientos acelerados (0 = NO, 1 = SI)
 *           example: 1
 *         miedo_perder_control:
 *           type: integer
 *           enum: [0, 1]
 *           description: Miedo a perder el control (0 = NO, 1 = SI)
 *           example: 1
 *         sentimiento_panico:
 *           type: integer
 *           enum: [0, 1]
 *           description: Sentimiento de pánico (0 = NO, 1 = SI)
 *           example: 0
 *         agitacion:
 *           type: integer
 *           enum: [0, 1]
 *           description: Agitación (0 = NO, 1 = SI)
 *           example: 1
 *     AnxietyResponse:
 *       type: object
 *       properties:
 *         id_ansiedad:
 *           type: integer
 *           description: ID único del registro de ansiedad
 *           example: 1
 *         id_usuario:
 *           type: integer
 *           description: ID del usuario
 *           example: 5
 *         preocupacion_bienestar_propio:
 *           type: integer
 *           enum: [0, 1]
 *           description: Preocupación por bienestar propio (0 = NO, 1 = SI)
 *         miedo_dano_futuro:
 *           type: integer
 *           enum: [0, 1]
 *           description: Miedo a daño futuro (0 = NO, 1 = SI)
 *         temor_malo_suceda:
 *           type: integer
 *           enum: [0, 1]
 *           description: Temor a que algo malo suceda (0 = NO, 1 = SI)
 *         preocupacion_muchas_cosas:
 *           type: integer
 *           enum: [0, 1]
 *           description: Preocupación por muchas cosas (0 = NO, 1 = SI)
 *         preocupacion_futuro:
 *           type: integer
 *           enum: [0, 1]
 *           description: Preocupación por el futuro (0 = NO, 1 = SI)
 *         sentirse_desbordado:
 *           type: integer
 *           enum: [0, 1]
 *           description: Sentirse desbordado (0 = NO, 1 = SI)
 *         miedo_mente_bloquee:
 *           type: integer
 *           enum: [0, 1]
 *           description: Miedo a que la mente se bloquee (0 = NO, 1 = SI)
 *         agobios_estres_incomodidad:
 *           type: integer
 *           enum: [0, 1]
 *           description: Agobios, estrés e incomodidad (0 = NO, 1 = SI)
 *         preocupacion_empleo:
 *           type: integer
 *           enum: [0, 1]
 *           description: Preocupación por el empleo (0 = NO, 1 = SI)
 *         dificultad_dormir:
 *           type: integer
 *           enum: [0, 1]
 *           description: Dificultad para dormir (0 = NO, 1 = SI)
 *         hacer_cosas_cierto_orden:
 *           type: integer
 *           enum: [0, 1]
 *           description: Necesidad de hacer cosas en cierto orden (0 = NO, 1 = SI)
 *         busqueda_perfeccion:
 *           type: integer
 *           enum: [0, 1]
 *           description: Búsqueda de perfección (0 = NO, 1 = SI)
 *         necesidad_control:
 *           type: integer
 *           enum: [0, 1]
 *           description: Necesidad de control (0 = NO, 1 = SI)
 *         dificultad_dejar_revisar:
 *           type: integer
 *           enum: [0, 1]
 *           description: Dificultad para dejar de revisar (0 = NO, 1 = SI)
 *         nerviosismo_sobresalto:
 *           type: integer
 *           enum: [0, 1]
 *           description: Nerviosismo y sobresalto (0 = NO, 1 = SI)
 *         preocupacion_pensamientos_repetitivos:
 *           type: integer
 *           enum: [0, 1]
 *           description: Preocupación por pensamientos repetitivos (0 = NO, 1 = SI)
 *         estar_guardia_atenta:
 *           type: integer
 *           enum: [0, 1]
 *           description: Estar en guardia o atenta (0 = NO, 1 = SI)
 *         molestia_recuerdos_suenos:
 *           type: integer
 *           enum: [0, 1]
 *           description: Molestia por recuerdos o sueños (0 = NO, 1 = SI)
 *         preocupacion_verguenza:
 *           type: integer
 *           enum: [0, 1]
 *           description: Preocupación por la vergüenza (0 = NO, 1 = SI)
 *         miedo_juicio_negativo:
 *           type: integer
 *           enum: [0, 1]
 *           description: Miedo al juicio negativo (0 = NO, 1 = SI)
 *         incomodidad_multitudes:
 *           type: integer
 *           enum: [0, 1]
 *           description: Incomodidad en multitudes (0 = NO, 1 = SI)
 *         evitar_actividades_sociales:
 *           type: integer
 *           enum: [0, 1]
 *           description: Evitar actividades sociales (0 = NO, 1 = SI)
 *         evitar_cosas_preocupan:
 *           type: integer
 *           enum: [0, 1]
 *           description: Evitar cosas que preocupan (0 = NO, 1 = SI)
 *         desapego_irrealidad:
 *           type: integer
 *           enum: [0, 1]
 *           description: Desapego o irrealidad (0 = NO, 1 = SI)
 *         perdida_tiempo_memoria:
 *           type: integer
 *           enum: [0, 1]
 *           description: Pérdida de tiempo o memoria (0 = NO, 1 = SI)
 *         dificultad_adaptar_cambios:
 *           type: integer
 *           enum: [0, 1]
 *           description: Dificultad para adaptarse a cambios (0 = NO, 1 = SI)
 *         ansiedad_dificulta_actividades:
 *           type: integer
 *           enum: [0, 1]
 *           description: La ansiedad dificulta actividades (0 = NO, 1 = SI)
 *         pensamientos_acelerados:
 *           type: integer
 *           enum: [0, 1]
 *           description: Pensamientos acelerados (0 = NO, 1 = SI)
 *         miedo_perder_control:
 *           type: integer
 *           enum: [0, 1]
 *           description: Miedo a perder el control (0 = NO, 1 = SI)
 *         sentimiento_panico:
 *           type: integer
 *           enum: [0, 1]
 *           description: Sentimiento de pánico (0 = NO, 1 = SI)
 *         agitacion:
 *           type: integer
 *           enum: [0, 1]
 *           description: Agitación (0 = NO, 1 = SI)
 *     AnxietyListResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: "Success"
 *         registros_ansiedad:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/AnxietyResponse'
 *         mensaje:
 *           type: string
 *           example: "Consulta exitosa"
 *     AnxietyDetailResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: "Success"
 *         registro_ansiedad:
 *           oneOf:
 *             - $ref: '#/components/schemas/AnxietyResponse'
 *             - type: array
 *               items:
 *                 $ref: '#/components/schemas/AnxietyResponse'
 *         mensaje:
 *           type: string
 *           example: "Consulta exitosa"
 *     AnxietyCreateResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: "Success"
 *         registro_ansiedad:
 *           $ref: '#/components/schemas/AnxietyResponse'
 *         mensaje:
 *           type: string
 *           example: "Registro exitoso"
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * /api/anxiety:
 *   get:
 *     summary: Obtener todos los registros de ansiedad
 *     description: Obtiene la lista completa de registros de ansiedad. Solo accesible por administradores y profesionales
 *     tags: [5. Ansiedad - Admin/Professional]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AnxietyListResponse'
 *             example:
 *               status: "Success"
 *               registros_ansiedad: 
 *                 - id_ansiedad: 1
 *                   id_usuario: 5
 *                   preocupacion_bienestar_propio: 1
 *                   miedo_dano_futuro: 0
 *                   temor_malo_suceda: 1
 *                   preocupacion_muchas_cosas: 1
 *                   preocupacion_futuro: 1
 *                   sentirse_desbordado: 0
 *                   miedo_mente_bloquee: 1
 *                   agobios_estres_incomodidad: 1
 *                   preocupacion_empleo: 0
 *                   dificultad_dormir: 1
 *                   hacer_cosas_cierto_orden: 0
 *                   busqueda_perfeccion: 1
 *                   necesidad_control: 1
 *                   dificultad_dejar_revisar: 0
 *                   nerviosismo_sobresalto: 1
 *                   preocupacion_pensamientos_repetitivos: 1
 *                   estar_guardia_atenta: 1
 *                   molestia_recuerdos_suenos: 0
 *                   preocupacion_verguenza: 1
 *                   miedo_juicio_negativo: 1
 *                   incomodidad_multitudes: 0
 *                   evitar_actividades_sociales: 1
 *                   evitar_cosas_preocupan: 1
 *                   desapego_irrealidad: 0
 *                   perdida_tiempo_memoria: 0
 *                   dificultad_adaptar_cambios: 1
 *                   ansiedad_dificulta_actividades: 1
 *                   pensamientos_acelerados: 1
 *                   miedo_perder_control: 1
 *                   sentimiento_panico: 0
 *                   agitacion: 1
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
 *         description: No se encontraron registros de ansiedad
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No existen registros de ansiedad"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No se pudieron obtener los registros de ansiedad"
 */
router.get('/',auth,rolMiddleware.requireAdminOrProfessional,anxietyController.getAll)

/**
 * @swagger
 * /api/anxiety/id/{id}:
 *   get:
 *     summary: Obtener registro de ansiedad por ID
 *     description: Obtiene un registro específico de ansiedad por su ID. Solo accesible por administradores y profesionales
 *     tags: [5. Ansiedad - Admin/Professional]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID único del registro de ansiedad
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Registro obtenido exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AnxietyDetailResponse'
 *             example:
 *               status: "Success"
 *               registro_ansiedad:
 *                 id_ansiedad: 1
 *                 id_usuario: 5
 *                 preocupacion_bienestar_propio: 1
 *                 miedo_dano_futuro: 0
 *                 temor_malo_suceda: 1
 *                 preocupacion_muchas_cosas: 1
 *                 preocupacion_futuro: 1
 *                 sentirse_desbordado: 0
 *                 miedo_mente_bloquee: 1
 *                 agobios_estres_incomodidad: 1
 *                 preocupacion_empleo: 0
 *                 dificultad_dormir: 1
 *                 hacer_cosas_cierto_orden: 0
 *                 busqueda_perfeccion: 1
 *                 necesidad_control: 1
 *                 dificultad_dejar_revisar: 0
 *                 nerviosismo_sobresalto: 1
 *                 preocupacion_pensamientos_repetitivos: 1
 *                 estar_guardia_atenta: 1
 *                 molestia_recuerdos_suenos: 0
 *                 preocupacion_verguenza: 1
 *                 miedo_juicio_negativo: 1
 *                 incomodidad_multitudes: 0
 *                 evitar_actividades_sociales: 1
 *                 evitar_cosas_preocupan: 1
 *                 desapego_irrealidad: 0
 *                 perdida_tiempo_memoria: 0
 *                 dificultad_adaptar_cambios: 1
 *                 ansiedad_dificulta_actividades: 1
 *                 pensamientos_acelerados: 1
 *                 miedo_perder_control: 1
 *                 sentimiento_panico: 0
 *                 agitacion: 1
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
 *         description: Registro de ansiedad no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No existe este registro de ansiedad"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No se pudo obtener este registro de ansiedad"
 */
router.get('/id/:id',auth,rolMiddleware.requireAdminOrProfessional,anxietyController.getById)

/**
 * @swagger
 * /api/anxiety/name/{name}:
 *   get:
 *     summary: Obtener registros de ansiedad por nombre de usuario
 *     description: Obtiene los registros de ansiedad asociados a un nombre de usuario específico. Solo accesible por administradores y profesionales
 *     tags: [5. Ansiedad - Admin/Professional]
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
 *               $ref: '#/components/schemas/AnxietyDetailResponse'
 *             example:
 *               status: "Success"
 *               registro_ansiedad:
 *                 - id_ansiedad: 1
 *                   id_usuario: 5
 *                   preocupacion_bienestar_propio: 1
 *                   miedo_dano_futuro: 0
 *                   temor_malo_suceda: 1
 *                   preocupacion_muchas_cosas: 1
 *                   preocupacion_futuro: 1
 *                   sentirse_desbordado: 0
 *                   miedo_mente_bloquee: 1
 *                   agobios_estres_incomodidad: 1
 *                   preocupacion_empleo: 0
 *                   dificultad_dormir: 1
 *                   hacer_cosas_cierto_orden: 0
 *                   busqueda_perfeccion: 1
 *                   necesidad_control: 1
 *                   dificultad_dejar_revisar: 0
 *                   nerviosismo_sobresalto: 1
 *                   preocupacion_pensamientos_repetitivos: 1
 *                   estar_guardia_atenta: 1
 *                   molestia_recuerdos_suenos: 0
 *                   preocupacion_verguenza: 1
 *                   miedo_juicio_negativo: 1
 *                   incomodidad_multitudes: 0
 *                   evitar_actividades_sociales: 1
 *                   evitar_cosas_preocupan: 1
 *                   desapego_irrealidad: 0
 *                   perdida_tiempo_memoria: 0
 *                   dificultad_adaptar_cambios: 1
 *                   ansiedad_dificulta_actividades: 1
 *                   pensamientos_acelerados: 1
 *                   miedo_perder_control: 1
 *                   sentimiento_panico: 0
 *                   agitacion: 1
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
 *         description: No se encontraron registros para el usuario especificado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No existe este registro de ansiedad"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No se pudo obtener este registro de ansiedad"
 */
router.get('/name/:name',auth,rolMiddleware.requireAdminOrProfessional,anxietyController.getByNameUser)



/**
 * @swagger
 * /api/anxiety/active:
 *   get:
 *     summary: Obtener el registro de ansiedad activo del usuario autenticado
 *     description: Obtiene el registro de ansiedad activo asociado al usuario autenticado. Solo accesible por el propio usuario.
 *     tags: [5. Ansiedad - Usuario]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Registro de ansiedad activo obtenido exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AnxietyDetailResponse'
 *             example:
 *               status: "Success"
 *               registro_ansiedad:
 *                 id_ansiedad: 1
 *                 id_usuario: 5
 *                 preocupacion_bienestar_propio: 1
 *                 miedo_dano_futuro: 0
 *                 temor_malo_suceda: 1
 *                 preocupacion_muchas_cosas: 1
 *                 preocupacion_futuro: 1
 *                 sentirse_desbordado: 0
 *                 miedo_mente_bloquee: 1
 *                 agobios_estres_incomodidad: 1
 *                 preocupacion_empleo: 0
 *                 dificultad_dormir: 1
 *                 hacer_cosas_cierto_orden: 0
 *                 busqueda_perfeccion: 1
 *                 necesidad_control: 1
 *                 dificultad_dejar_revisar: 0
 *                 nerviosismo_sobresalto: 1
 *                 preocupacion_pensamientos_repetitivos: 1
 *                 estar_guardia_atenta: 1
 *                 molestia_recuerdos_suenos: 0
 *                 preocupacion_verguenza: 1
 *                 miedo_juicio_negativo: 1
 *                 incomodidad_multitudes: 0
 *                 evitar_actividades_sociales: 1
 *                 evitar_cosas_preocupan: 1
 *                 desapego_irrealidad: 0
 *                 perdida_tiempo_memoria: 0
 *                 dificultad_adaptar_cambios: 1
 *                 ansiedad_dificulta_actividades: 1
 *                 pensamientos_acelerados: 1
 *                 miedo_perder_control: 1
 *                 sentimiento_panico: 0
 *                 agitacion: 1
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
 *       404:
 *         description: No se encontró registro de ansiedad activo para el usuario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No existe registro de ansiedad activo para este usuario"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No se pudo obtener el registro de ansiedad activo"
 */
router.get('/active', auth, anxietyController.getByUserIdActive)



/**
 * @swagger
 * /api/anxiety:
 *   post:
 *     summary: Crear registro de ansiedad
 *     description: Crea un nuevo registro de evaluación de ansiedad para el usuario autenticado. Cada usuario solo puede tener un registro de ansiedad
 *     tags: [5. Ansiedad - Usuario]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AnxietyRequest'
 *           example:
 *             preocupacion_bienestar_propio: 1
 *             miedo_dano_futuro: 0
 *             temor_malo_suceda: 1
 *             preocupacion_muchas_cosas: 1
 *             preocupacion_futuro: 1
 *             sentirse_desbordado: 0
 *             miedo_mente_bloquee: 1
 *             agobios_estres_incomodidad: 1
 *             preocupacion_empleo: 0
 *             dificultad_dormir: 1
 *             hacer_cosas_cierto_orden: 0
 *             busqueda_perfeccion: 1
 *             necesidad_control: 1
 *             dificultad_dejar_revisar: 0
 *             nerviosismo_sobresalto: 1
 *             preocupacion_pensamientos_repetitivos: 1
 *             estar_guardia_atenta: 1
 *             molestia_recuerdos_suenos: 0
 *             preocupacion_verguenza: 1
 *             miedo_juicio_negativo: 1
 *             incomodidad_multitudes: 0
 *             evitar_actividades_sociales: 1
 *             evitar_cosas_preocupan: 1
 *             desapego_irrealidad: 0
 *             perdida_tiempo_memoria: 0
 *             dificultad_adaptar_cambios: 1
 *             ansiedad_dificulta_actividades: 1
 *             pensamientos_acelerados: 1
 *             miedo_perder_control: 1
 *             sentimiento_panico: 0
 *             agitacion: 1
 *     responses:
 *       200:
 *         description: Registro creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AnxietyCreateResponse'
 *             example:
 *               status: "Success"
 *               registro_ansiedad:
 *                 id_ansiedad: 1
 *                 id_usuario: 5
 *                 preocupacion_bienestar_propio: 1
 *                 miedo_dano_futuro: 0
 *                 temor_malo_suceda: 1
 *                 preocupacion_muchas_cosas: 1
 *                 preocupacion_futuro: 1
 *                 sentirse_desbordado: 0
 *                 miedo_mente_bloquee: 1
 *                 agobios_estres_incomodidad: 1
 *                 preocupacion_empleo: 0
 *                 dificultad_dormir: 1
 *                 hacer_cosas_cierto_orden: 0
 *                 busqueda_perfeccion: 1
 *                 necesidad_control: 1
 *                 dificultad_dejar_revisar: 0
 *                 nerviosismo_sobresalto: 1
 *                 preocupacion_pensamientos_repetitivos: 1
 *                 estar_guardia_atenta: 1
 *                 molestia_recuerdos_suenos: 0
 *                 preocupacion_verguenza: 1
 *                 miedo_juicio_negativo: 1
 *                 incomodidad_multitudes: 0
 *                 evitar_actividades_sociales: 1
 *                 evitar_cosas_preocupan: 1
 *                 desapego_irrealidad: 0
 *                 perdida_tiempo_memoria: 0
 *                 dificultad_adaptar_cambios: 1
 *                 ansiedad_dificulta_actividades: 1
 *                 pensamientos_acelerados: 1
 *                 miedo_perder_control: 1
 *                 sentimiento_panico: 0
 *                 agitacion: 1
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
 *                   mensaje: "Este usuario ya hizo su registro de ansiedad"
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
 *               mensaje: "No se pudo crear el registro"
 */
router.post('/',auth,anxietyController.createAnxiety)

/**
 * @swagger
 * /api/anxiety/{id}:
 *   delete:
 *     summary: Eliminar registro de ansiedad
 *     description: Elimina un registro específico de ansiedad por su ID. Solo accesible por administradores y profesionales
 *     tags: [5. Ansiedad - Admin/Professional]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID único del registro de ansiedad a eliminar
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
 *         description: Registro de ansiedad no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No existe este registro"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No se pudo eliminar el registro de ansiedad"
 */
router.delete('/:id',auth,rolMiddleware.requireAdminOrProfessional,anxietyController.deleteAnxiety)

module.exports = router