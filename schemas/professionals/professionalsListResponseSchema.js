/**
 * @swagger
 * components:
 *   schemas:
 *     ProfessionalsListResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: "Success"
 *         profesionales:
 *           type: array
 *           items:
 *             allOf:
 *               - $ref: '#/components/schemas/Professional'
 *               - type: object
 *                 properties:
 *                   usuario_nombre:
 *                     type: string
 *                     description: Nombre del usuario asociado
 *                     example: "Dr. Juan Pérez"
 *                   usuario_correo:
 *                     type: string
 *                     format: email
 *                     description: Correo del usuario asociado
 *                     example: "juan.perez@email.com"
 *                   usuario_celular:
 *                     type: string
 *                     description: Celular del usuario asociado
 *                     example: "300 123 4567"
 *                   usuario_cedula:
 *                     type: string
 *                     description: Cédula del usuario asociado
 *                     example: "1234567890"
 *                   usuario_fecha_nacimiento:
 *                     type: string
 *                     format: date
 *                     description: Fecha de nacimiento del usuario
 *                     example: "1985-03-15"
 *                   id_certificacion:
 *                     type: integer
 *                     description: ID de la certificación (si tiene)
 *                     example: 1
 *                   nombre_archivo:
 *                     type: string
 *                     description: Nombre del archivo de certificación
 *                     example: "certificado_psicologia.pdf"
 *         mensaje:
 *           type: string
 *           example: "Consulta exitosa"
 */

module.exports = {}