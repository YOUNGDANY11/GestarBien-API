const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

/**
 * @swagger
 * tags:
 *   name: 1. Autenticación
 *   description: Endpoints para manejo de autenticación y sesiones
 */

/**
 * @swagger
 * /api/auth/:
 *   post:
 *     summary: Iniciar sesión
 *     description: Autentica un usuario con correo electrónico y contraseña, retorna un token JWT
 *     tags: [1. Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *             example:
 *               status: "Success"
 *               token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *               mensaje: "Inicio de sesión con éxito"
 *       400:
 *         description: Datos de entrada inválidos o contraseña incorrecta
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
 *               wrong_password:
 *                 summary: Contraseña incorrecta
 *                 value:
 *                   status: "Error"
 *                   mensaje: "Contraseña incorrecta"
 *       404:
 *         description: Correo no registrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "Correo no registrado"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: "Error"
 *               mensaje: "No se pudo iniciar sesión"
 */
router.post('/',authController.login)

module.exports = router