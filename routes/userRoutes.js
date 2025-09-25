const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const auth = require('../middlewares/auth.Middleware')
const rolMiddleware = require('../middlewares/rol.middleware')


/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crear un nuevo usuario (Registro público)
 *     description: Endpoint público para que los usuarios se registren en la aplicación. No requiere autenticación
 *     tags: [2. Usuarios - Público]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - correo
 *               - contrasena
 *               - nombre
 *               - fecha_nacimiento
 *               - celular
 *               - cedula
 *             properties:
 *               id_rol:
 *                 type: integer
 *                 default: 1
 *                 description: Rol del usuario (opcional, por defecto 1)
 *               correo:
 *                 type: string
 *                 format: email
 *                 example: usuario@ejemplo.com
 *                 description: Correo electrónico único del usuario
 *               contrasena:
 *                 type: string
 *                 minLength: 6
 *                 example: miPassword123
 *                 description: Contraseña del usuario
 *               nombre:
 *                 type: string
 *                 example: Juan Pérez García
 *                 description: Nombre completo del usuario
 *               fecha_nacimiento:
 *                 type: string
 *                 format: date
 *                 example: "1990-05-15"
 *                 description: Fecha de nacimiento del usuario (YYYY-MM-DD)
 *               celular:
 *                 type: string
 *                 example: "300 123 4567"
 *                 description: Número de celular del usuario
 *               cedula:
 *                 type: string
 *                 example: "1234567890"
 *                 description: Número de cédula único del usuario
 *     responses:
 *       200:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "Success"
 *                 usuario:
 *                   $ref: '#/components/schemas/User'
 *                 mensaje:
 *                   type: string
 *                   example: "Usuario registrado exitosamente"
 *       400:
 *         description: Faltan campos requeridos o datos inválidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Correo o documento ya registrado
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
router.post('/',userController.registerUser)

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     description: Endpoint para administradores y profesionales para obtener la lista completa de usuarios
 *     tags: [2. Usuarios - Admin/Professional]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "Success"
 *                 usuarios:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
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
 *         description: No hay usuarios registrados
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
router.get('/',auth,rolMiddleware.requireAdminOrProfessional,userController.getAllUsers)

/**
 * @swagger
 * /api/users/id/{id}:
 *   get:
 *     summary: Obtener usuario por ID
 *     description: Endpoint para administradores y profesionales para buscar un usuario específico por su ID
 *     tags: [2. Usuarios - Admin/Professional]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario encontrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "Success"
 *                 usuario:
 *                   $ref: '#/components/schemas/User'
 *                 mensaje:
 *                   type: string
 *                   example: "Usuario encontrado"
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
 *         description: Usuario no encontrado
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
router.get('/id/:id',auth,rolMiddleware.requireAdminOrProfessional,userController.getUserById)

/**
 * @swagger
 * /api/users/email/{email}:
 *   get:
 *     summary: Buscar usuarios por correo
 *     description: Endpoint para administradores y profesionales para buscar usuarios por correo electrónico
 *     tags: [2. Usuarios - Admin/Professional]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: Correo o parte del correo a buscar
 *     responses:
 *       200:
 *         description: Usuarios encontrados exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "Success"
 *                 usuarios:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                 mensaje:
 *                   type: string
 *                   example: "Usuarios encontrados"
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
 *         description: Usuario no encontrado
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
router.get('/email/:email',auth,rolMiddleware.requireAdminOrProfessional,userController.getUserByEmail)

/**
 * @swagger
 * /api/users/name/{name}:
 *   get:
 *     summary: Buscar usuarios por nombre
 *     description: Endpoint para administradores y profesionales para buscar usuarios por nombre
 *     tags: [2. Usuarios - Admin/Professional]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre o parte del nombre a buscar
 *     responses:
 *       200:
 *         description: Usuarios encontrados exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "Success"
 *                 usuarios:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                 mensaje:
 *                   type: string
 *                   example: "Usuarios encontrados"
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
 *         description: Usuario no encontrado
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
router.get('/name/:name',auth,rolMiddleware.requireAdminOrProfessional,userController.getUserByName)

/**
 * @swagger
 * /api/users/document/{doc}:
 *   get:
 *     summary: Buscar usuarios por documento
 *     description: Endpoint para administradores y profesionales para buscar usuarios por número de documento
 *     tags: [2. Usuarios - Admin/Professional]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: doc
 *         required: true
 *         schema:
 *           type: string
 *         description: Número de documento a buscar
 *     responses:
 *       200:
 *         description: Usuarios encontrados exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "Success"
 *                 usuarios:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                 mensaje:
 *                   type: string
 *                   example: "Usuarios encontrados"
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
 *         description: Usuario no encontrado
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
router.get('/document/:doc', auth, rolMiddleware.requireAdminOrProfessional, userController.getUserByDocumentId)

/**
 * @swagger
 * /api/users/active-user:
 *   get:
 *     summary: Obtener información del usuario activo
 *     description: Obtiene los datos del usuario que está actualmente autenticado. Disponible para todos los usuarios autenticados
 *     tags: [2. Usuarios - Usuario Normal]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Información del usuario obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "Success"
 *                 usuario:
 *                   $ref: '#/components/schemas/User'
 *                 mensaje:
 *                   type: string
 *                   example: "Consulta exitosa"
 *       401:
 *         description: Token no válido o usuario no autenticado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Usuario no encontrado
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
router.get('/active-user',auth,userController.getByActiveUser)



/**
 * @swagger
 * /api/users/active-user:
 *   put:
 *     summary: Actualizar contraseña propia
 *     description: Permite a cualquier usuario autenticado cambiar su propia contraseña
 *     tags: [2. Usuarios - Usuario Normal]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - contrasena
 *             properties:
 *               contrasena:
 *                 type: string
 *                 minLength: 6
 *                 example: miNuevaPassword123
 *                 description: Nueva contraseña del usuario
 *     responses:
 *       200:
 *         description: Contraseña actualizada exitosamente
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
 *                   example: "Contraseña actualizada exitosamente"
 *       400:
 *         description: Contraseña requerida o inválida
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Usuario no autenticado
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
router.put('/active-user',auth, userController.updatePassword)




/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Actualizar un usuario (Admin)
 *     description: Endpoint exclusivo para administradores para actualizar cualquier usuario del sistema
 *     tags: [2. Usuarios - Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_rol
 *               - correo
 *               - nombre
 *               - fecha_nacimiento
 *               - celular
 *               - cedula
 *             properties:
 *               id_rol:
 *                 type: integer
 *                 description: ID del rol a asignar al usuario
 *                 example: 1
 *               correo:
 *                 type: string
 *                 format: email
 *                 description: Correo electrónico del usuario
 *                 example: usuario@ejemplo.com
 *               nombre:
 *                 type: string
 *                 description: Nombre completo del usuario
 *                 example: Juan Pérez García
 *               fecha_nacimiento:
 *                 type: string
 *                 format: date
 *                 description: Fecha de nacimiento (YYYY-MM-DD)
 *                 example: "1990-05-15"
 *               celular:
 *                 type: string
 *                 description: Número de celular
 *                 example: "300 123 4567"
 *               cedula:
 *                 type: string
 *                 description: Número de cédula
 *                 example: "1234567890"
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "Success"
 *                 usuario:
 *                   $ref: '#/components/schemas/User'
 *                 mensaje:
 *                   type: string
 *                   example: "Usuario actualizado exitosamente"
 *       400:
 *         description: Faltan campos requeridos o correo ya en uso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
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
 *         description: Usuario no encontrado
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
router.put('/:id',auth,rolMiddleware.requireAdmin, userController.updateUser)

/**
 * @swagger
 * /api/users/password/{id}:
 *   put:
 *     summary: Actualizar contraseña de cualquier usuario (Admin)
 *     description: Endpoint exclusivo para administradores para cambiar la contraseña de cualquier usuario
 *     tags: [2. Usuarios - Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario cuya contraseña se va a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - contrasena
 *             properties:
 *               contrasena:
 *                 type: string
 *                 minLength: 6
 *                 example: nuevaPassword123
 *                 description: Nueva contraseña para el usuario
 *     responses:
 *       200:
 *         description: Contraseña actualizada exitosamente
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
 *                   example: "Contraseña actualizada exitosamente"
 *       400:
 *         description: Contraseña requerida o inválida
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
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
 *         description: Usuario no encontrado
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
router.put('/password/:id',auth,rolMiddleware.requireAdmin, userController.updatePasswordByAdmin)



/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Eliminar un usuario (Admin)
 *     description: Endpoint exclusivo para administradores para eliminar cualquier usuario del sistema
 *     tags: [2. Usuarios - Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a eliminar
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
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
 *                   example: "Usuario eliminado exitosamente"
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
 *         description: Usuario no encontrado
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
router.delete('/:id',auth,rolMiddleware.requireAdmin, userController.deleteUser)

module.exports = router
