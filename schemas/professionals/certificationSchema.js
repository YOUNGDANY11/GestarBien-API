/**
 * @swagger
 * components:
 *   schemas:
 *     Certification:
 *       type: object
 *       properties:
 *         id_certificacion:
 *           type: integer
 *           description: ID único de la certificación
 *           example: 1
 *         id_profesional:
 *           type: integer
 *           description: ID del profesional al que pertenece
 *           example: 5
 *         archivo:
 *           type: string
 *           description: Nombre del archivo almacenado en el servidor
 *           example: "cert-1759343285026-440262866.pdf"
 *         nombre_archivo:
 *           type: string
 *           description: Nombre original del archivo
 *           example: "certificado_psicologia.pdf"
 *         fecha_creacion:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación de la certificación
 *           example: "2024-01-15T10:30:00Z"
 */

module.exports = {}