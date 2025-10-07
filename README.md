# GestarBien API

API REST para la plataforma GestarBien. Provee endpoints para autenticación, gestión de usuarios, roles, personajes, profesionales y recursos relacionados con ansiedad y depresión. Incluye documentación OpenAPI/Swagger, autenticación JWT, CORS y carga de archivos.

- Runtime: Node.js (Express 5)
- Base de datos: PostgreSQL
- Documentación: Swagger UI
- Autenticación: JWT Bearer
- Subidas: Multer (archivos servidos desde `/uploads`)

Documentación en vivo (local): `http://localhost:<PORT>/api-docs`

> Código de entrada: [index.js](https://github.com/YOUNGDANY11/GestarBien-API/blob/main/index.js)  
> Dependencias y scripts: [package.json](https://github.com/YOUNGDANY11/GestarBien-API/blob/main/package.json)

---

## Contenidos

- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecución](#ejecución)
- [Estructura de carpetas](#estructura-de-carpetas)
- [Características principales](#características-principales)
- [Rutas principales](#rutas-principales)
- [Base de datos](#base-de-datos)
- [Scripts de NPM](#scripts-de-npm)
- [Buenas prácticas y notas](#buenas-prácticas-y-notas)
- [Tecnologías](#tecnologías)
- [Licencia](#licencia)

---

## Requisitos previos

- Node.js 18+ (recomendado)
- NPM 9+ (incluido con Node)
- PostgreSQL 13+ (recomendado)

---

## Instalación

1) Clonar el repositorio
```bash
git clone https://github.com/YOUNGDANY11/GestarBien-API.git
cd GestarBien-API
```

2) Instalar dependencias
```bash
npm install
```

3) Crear carpeta para subidas (si no existe)
```bash
mkdir -p uploads
```

---

## Configuración

Crea un archivo `.env` en la raíz del proyecto con tus variables de entorno. Ejemplo:

```env
# Servidor
PORT=3000

# Base de datos (usa tu configuración real)
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=gestarbien

# Autenticación
JWT_SECRET=tu_super_secreto_largo_y_unico
```

- La conexión a PostgreSQL se gestiona en [config/db.js](https://github.com/YOUNGDANY11/GestarBien-API/blob/main/config/db.js).
- CORS está habilitado para: `http://localhost:5173` y `http://localhost:3000`. Puedes ajustar estos orígenes en [index.js](https://github.com/YOUNGDANY11/GestarBien-API/blob/main/index.js) si tu frontend corre en otra URL.

---

## Ejecución

- Modo desarrollo (recarga con nodemon):
```bash
npm run dev
```

- Modo producción:
```bash
npm start
```

Accede a:
- API: `http://localhost:<PORT>`
- Swagger UI: `http://localhost:<PORT>/api-docs`
- Archivos estáticos (subidas): `http://localhost:<PORT>/uploads/...`

---

## Estructura de carpetas

```
GestarBien-API/
├─ .gitignore
├─ index.js                     # Bootstrap del servidor, CORS, Swagger, rutas, estáticos
├─ package.json                 # Scripts y dependencias
├─ package-lock.json
├─ SQL/
│  └─ db.sql                    # Script de creación/esquema de base de datos
├─ config/
│  └─ db.js                     # Conexión a PostgreSQL (pg)
├─ controllers/                 # Lógica de negocio por recurso
│  ├─ anxietyController.js
│  ├─ authController.js
│  ├─ characterController.js
│  ├─ depressionController.js
│  ├─ professionalController.js
│  ├─ rolController.js
│  └─ userController.js
├─ middlewares/                 # Middlewares de autenticación, roles y subida
│  ├─ auth.Middleware.js
│  ├─ rol.middleware.js
│  └─ upload.middleware.js
├─ models/                      # Acceso a datos/queries por recurso
│  ├─ anxietyModel.js
│  ├─ characterModel.js
│  ├─ depressionModel.js
│  ├─ professionalModel.js
│  ├─ rolModel.js
│  └─ userModel.js
├─ routes/                      # Definición de endpoints y vinculación a controllers
│  ├─ anxietyRoutes.js
│  ├─ authRoutes.js
│  ├─ characterRoutes.js
│  ├─ depressionRoutes.js
│  ├─ professionalRoutes.js
│  ├─ rolRoutes.js
│  └─ userRoutes.js
└─ schemas/                     # Esquemas OpenAPI (Swagger) por recurso
   ├─ anxiety/
   ├─ auth/
   ├─ characters/
   ├─ depression/
   ├─ professionals/
   ├─ roles/
   ├─ users/
   ├─ errorSchema.js
   └─ index.js                  # Índice que exporta todos los esquemas para Swagger
```

- Rutas principales se registran en `index.js` bajo el prefijo `/api/...`
- Swagger se genera a partir de los archivos en `routes/*.js` y de los esquemas en `schemas/`

---

## Características principales

- API REST con Express 5.
- Documentación automática con Swagger:
  - Definiciones OpenAPI 3 en tiempo de ejecución usando `swagger-jsdoc`.
  - Interfaz Swagger UI en `/api-docs`.
  - Esquemas organizados por recurso en `schemas/` y exportados desde [`schemas/index.js`](https://github.com/YOUNGDANY11/GestarBien-API/blob/main/schemas/index.js).
  - Seguridad JWT documentada como `bearerAuth`.
- Autenticación y Autorización:
  - Login con JWT (`/api/auth`).
  - Middleware de autenticación JWT.
  - Autorización por roles mediante middleware (`rol.middleware.js`).
- Gestión de recursos:
  - Usuarios, Roles, Personajes (Characters), Profesionales.
  - Módulos de Ansiedad y Depresión.
- Carga de archivos:
  - Soportada por Multer.
  - Archivos servidos estáticamente desde `/uploads`.
- CORS configurado para desarrollo:
  - Orígenes permitidos por defecto: `http://localhost:5173` y `http://localhost:3000`.

---

## Rutas principales

Las rutas se montan en `index.js`:

- Autenticación: `'/api/auth'`
- Usuarios: `'/api/users'`
- Roles: `'/api/rol'`
- Caracterizacion: `'/api/characters'`
- Ansiedad: `'/api/anxiety'`
- Depresión: `'/api/depression'`
- Profesionales: `'/api/professional'`

Consulta la documentación interactiva en `http://localhost:<PORT>/api-docs` para ver:
- Endpoints disponibles
- Parámetros y cuerpos de petición/respuesta
- Esquemas (`schemas`) y modelos de datos
- Requisitos de autorización (JWT Bearer)

---

## Base de datos

- Motor: PostgreSQL (driver `pg`)
- Estructura inicial: [SQL/db.sql](https://github.com/YOUNGDANY11/GestarBien-API/blob/main/SQL/db.sql)

Pasos recomendados:
1) Crear base de datos en PostgreSQL (usa el nombre de `DB_NAME` definido en `.env`).
2) Ejecutar el script `SQL/db.sql` en esa base de datos para crear tablas/relaciones iniciales.
3) Verifica credenciales y conectividad según tu configuración en `.env` y [`config/db.js`](https://github.com/YOUNGDANY11/GestarBien-API/blob/main/config/db.js).

---

## Scripts de NPM

Desde [package.json](https://github.com/YOUNGDANY11/GestarBien-API/blob/main/package.json):

- `npm run dev` — Inicia el servidor con `nodemon` (recarga en caliente).
- `npm start` — Inicia el servidor con Node.
- `npm test` — Placeholder actual (sin tests configurados).

---

## Buenas prácticas y notas

- Seguridad:
  - Mantén `JWT_SECRET` fuera del control de versiones y suficientemente largo/aleatorio.
  - Revisa y ajusta los orígenes permitidos de CORS para tu entorno de despliegue.
- Subidas:
  - Asegúrate de crear la carpeta `uploads/` y de protegerla adecuadamente en producción.
- Configuración:
  - No subas tu `.env` al repositorio.
  - Ajusta el `PORT` y las variables de la base de datos según tu entorno.
- Documentación:
  - Los esquemas OpenAPI están centralizados en `schemas/`. Añade/actualiza esquemas al crear nuevos recursos.
  - Swagger UI ordena tags y operaciones alfabéticamente para facilitar la navegación.

---

## Tecnologías

- [Express](https://expressjs.com/) 5
- [PostgreSQL](https://www.postgresql.org/) + [pg](https://www.npmjs.com/package/pg)
- [JWT](https://jwt.io/) via `jsonwebtoken`
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [Multer](https://github.com/expressjs/multer)
- [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc) + [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
- [CORS](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [nodemon](https://www.npmjs.com/package/nodemon) (dev)

---

## Licencia

Este proyecto se distribuye bajo la licencia ISC (ver `package.json`).

---
