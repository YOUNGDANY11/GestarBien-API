const express = require('express')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')
require('dotenv').config()

//Importar rutas
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')
const rolRoutes = require('./routes/rolRoutes')
const characterRouters = require('./routes/characterRoutes')
const anxietyRoutes = require('./routes/anxietyRoutes')
const depressionRoutes = require('./routes/depressionRoutes')
const professionaleRoutes = require('./routes/professionalRoutes')

//Importar schemas
const schemas = require('./schemas')
// Configuración de Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'GestarBien API',
            version: '1.0.0',
            description: 'API para la gestión de usuarios en GestarBien\n\n**Estructura de la API:**\n- 🔐 **Autenticación**: Endpoints para login y manejo de sesiones\n- 👥 **Usuarios**: CRUD completo de usuarios con diferentes niveles de permisos\n- 🎭 **Roles**: Gestión de roles del sistema (solo administradores)\n- 📋 **Caracterizaciones**: Gestión de caracterizaciones socioeconómicas y psicosociales de usuarios',
            contact: {
                name: 'API Support',
                email: 'support@gestarbien.com'
            }
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 3000}`,
                description: 'Backend GestarBien'
            }
        ],
        components: {
            schemas: schemas,
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                    description: 'Ingresa el token JWT obtenido del login'
                }
            }
        }
    },
    apis: ['./routes/*.js'] 
}

const specs = swaggerJsdoc(swaggerOptions)

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Ruta Swagger ordenada de forma alfabetica y numerica
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
    swaggerOptions: {
        tagsSorter: 'alpha',
        operationsSorter: 'alpha'
    }
}))
//Rutas funcionales
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/rol', rolRoutes)
app.use('/api/characters', characterRouters)
app.use('/api/anxiety', anxietyRoutes)
app.use('/api/depression',depressionRoutes)
app.use('/api/professional',professionaleRoutes)

app.listen(PORT, () =>{
    console.log(`Server corriendo en el puerto ${PORT}`)
})