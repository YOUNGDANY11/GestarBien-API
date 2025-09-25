const express = require('express')
const router = express.Router()
const rolController = require('../controllers/rolController')
const auth = require('../middlewares/auth.Middleware')
const rolMiddleware = require('../middlewares/rol.middleware')

/**
 * @swagger
 * tags:
 *   name: 3. Roles - Admin
 *   description: Endpoints para gestión de roles del sistema (solo administradores)
 */

/**
 * @swagger
 * /api/roles:
 *   get:
 *     summary: Obtener todos los roles
 *     description: Endpoint para administradores para obtener la lista completa de roles del sistema
 *     tags: [3. Roles - Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de roles obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "Success"
 *                 roles:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id_rol:
 *                         type: integer
 *                         example: 1
 *                         description: ID único del rol
 *                       nombre:
 *                         type: string
 *                         example: "Admin"
 *                         description: Nombre del rol
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
 *         description: No tienes permisos para acceder a este recurso (requiere rol Admin)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: No hay roles registrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No hay roles registrados"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No se pudo obtener los roles"
 */
router.get('/',auth,rolMiddleware.requireAdmin,rolController.getAll)

/**
 * @swagger
 * /api/roles/id/{id}:
 *   get:
 *     summary: Obtener rol por ID
 *     description: Endpoint para administradores para obtener un rol específico por su ID
 *     tags: [3. Roles - Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único del rol
 *         example: 1
 *     responses:
 *       200:
 *         description: Rol encontrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "Success"
 *                 rol:
 *                   type: object
 *                   properties:
 *                     id_rol:
 *                       type: integer
 *                       example: 1
 *                       description: ID único del rol
 *                     nombre:
 *                       type: string
 *                       example: "Admin"
 *                       description: Nombre del rol
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
 *         description: No tienes permisos para acceder a este recurso (requiere rol Admin)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: No existe el rol con el ID especificado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No existe este rol"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No se pudo obtener el rol"
 */
router.get('/id/:id',auth,rolMiddleware.requireAdmin,rolController.getById)

/**
 * @swagger
 * /api/roles/name/{name}:
 *   get:
 *     summary: Obtener rol por nombre
 *     description: Endpoint para administradores para buscar roles por nombre (búsqueda parcial)
 *     tags: [3. Roles - Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre del rol a buscar (búsqueda parcial)
 *         example: "Admin"
 *     responses:
 *       200:
 *         description: Roles encontrados exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "Success"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id_rol:
 *                         type: integer
 *                         example: 1
 *                         description: ID único del rol
 *                       nombre:
 *                         type: string
 *                         example: "Admin"
 *                         description: Nombre del rol
 *       401:
 *         description: Token no válido o usuario no autenticado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: No tienes permisos para acceder a este recurso (requiere rol Admin)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: No se encontró ningún rol con ese nombre
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No se encontró este rol"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No se pudo obtener el rol"
 */
router.get('/name/:name',auth,rolMiddleware.requireAdmin,rolController.getByName)

/**
 * @swagger
 * /api/roles:
 *   post:
 *     summary: Crear un nuevo rol
 *     description: Endpoint para administradores para crear nuevos roles en el sistema
 *     tags: [3. Roles - Admin]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Supervisor"
 *                 description: Nombre del nuevo rol
 *     responses:
 *       200:
 *         description: Rol creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "Success"
 *                 rol:
 *                   type: object
 *                   properties:
 *                     id_rol:
 *                       type: integer
 *                       example: 4
 *                       description: ID único del rol creado
 *                     nombre:
 *                       type: string
 *                       example: "Supervisor"
 *                       description: Nombre del rol creado
 *                 mensaje:
 *                   type: string
 *                   example: "Rol creado con exito"
 *       400:
 *         description: Faltan campos requeridos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "Es requerido el nombre del rol"
 *       401:
 *         description: Token no válido o usuario no autenticado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: No tienes permisos para acceder a este recurso (requiere rol Admin)
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
 *               mensaje: "No se pudo crear el rol"
 */
router.post('/',auth,rolMiddleware.requireAdmin,rolController.creatRol)

/**
 * @swagger
 * /api/roles/{id}:
 *   delete:
 *     summary: Eliminar un rol
 *     description: Endpoint para administradores para eliminar roles del sistema
 *     tags: [3. Roles - Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único del rol a eliminar
 *         example: 4
 *     responses:
 *       200:
 *         description: Rol eliminado exitosamente
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
 *                   example: "Rol eliminado con exito"
 *       401:
 *         description: Token no válido o usuario no autenticado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: No tienes permisos para acceder a este recurso (requiere rol Admin)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: No existe el rol con el ID especificado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No existe este rol"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No se pudo eliminar el rol"
 */
router.delete('/:id',auth,rolMiddleware.requireAdmin,rolController.deleteRol)

module.exports = router