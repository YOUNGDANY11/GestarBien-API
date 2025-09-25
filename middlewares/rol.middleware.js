const pool = require('../config/db')

// Middleware para verificar roles específicos
const checkRole = (allowedRoles) => {
    return async (req, res, next) => {
        try {
            // Verificar que el usuario esté autenticado (debería venir de auth middleware)
            if (!req.user) {
                return res.status(401).json({
                    status: 'Error',
                    mensaje: 'Usuario no autenticado'
                })
            }

            const userRole = req.user.rol

            // Permitir múltiples roles (array) o un solo rol (number)
            const rolesPermitidos = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles]

            if (!rolesPermitidos.includes(userRole)) {
                return res.status(403).json({
                    status: 'Error',
                    mensaje: 'No tienes permisos para acceder a este recurso'
                })
            }

            next()
        } catch (error) {
            console.error('Error en middleware de rol:', error)
            return res.status(500).json({
                status: 'Error',
                mensaje: 'Error interno del servidor'
            })
        }
    }
}

// Middleware específico para administradores (asumiendo que el rol 1 es admin)
const requireAdmin = checkRole(1)

// Middleware específico para profesionales (asumiendo que el rol 2 es profesional)
const requireProfessional = checkRole(2)

// Middleware para usuarios regulares (asumiendo que el rol 3 es usuario regular)
const requireUser = checkRole(3)

// Middleware que permite múltiples roles
const requireAdminOrProfessional = checkRole([1, 2])

// Función auxiliar para obtener información del rol desde la base de datos
const getRoleInfo = async (roleId) => {
    try {
        const result = await pool.query('SELECT * FROM rol WHERE id_rol = $1', [roleId])
        return result.rows[0]
    } catch (error) {
        console.error('Error obteniendo información del rol:', error)
        return null
    }
}

// Middleware avanzado que incluye información del rol en la respuesta
const checkRoleWithInfo = (allowedRoles) => {
    return async (req, res, next) => {
        try {
            if (!req.user) {
                return res.status(401).json({
                    status: 'Error',
                    mensaje: 'Usuario no autenticado'
                })
            }

            const userRole = req.user.rol
            const rolesPermitidos = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles]

            if (!rolesPermitidos.includes(userRole)) {
                // Obtener información del rol del usuario para mensaje más descriptivo
                const roleInfo = await getRoleInfo(userRole)
                const roleName = roleInfo ? roleInfo.nombre : 'Desconocido'
                
                return res.status(403).json({
                    status: 'Error',
                    mensaje: `Tu rol actual (${roleName}) no tiene permisos para acceder a este recurso`
                })
            }

            // Agregar información del rol al request para uso posterior
            const roleInfo = await getRoleInfo(userRole)
            req.userRole = roleInfo

            next()
        } catch (error) {
            console.error('Error en middleware de rol con información:', error)
            return res.status(500).json({
                status: 'Error',
                mensaje: 'Error interno del servidor'
            })
        }
    }
}

module.exports = {
    checkRole,
    requireAdmin,
    requireProfessional, 
    requireUser,
    requireAdminOrProfessional,
    checkRoleWithInfo,
    getRoleInfo
}
