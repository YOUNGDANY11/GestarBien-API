/**
 * @swagger
 * components:
 *   schemas:
 *     Professional:
 *       type: object
 *       required:
 *         - institucion
 *         - enfoque
 *       properties:
 *         id_profesional:
 *           type: integer
 *           description: ID único del profesional
 *           example: 1
 *         id_usuario:
 *           type: integer
 *           description: ID del usuario asociado
 *           example: 5
 *         institucion:
 *           type: string
 *           description: Institución donde ejerce el profesional
 *           example: "Universidad Nacional de Colombia"
 *         enfoque:
 *           type: string
 *           description: Enfoque o especialidad del profesional
 *           example: "Psicología Clínica"
 *         fecha_creacion:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación del registro
 *           example: "2024-01-15T10:30:00Z"
 */

module.exports = {}