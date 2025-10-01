const userSchema = require('./users/userSchema')
const userResponseSchema = require('./users/userResponseSchema')
const errorSchema = require('./errorSchema')
const loginRequestSchema = require('./auth/loginRequestSchema')
const loginResponseSchema = require('./auth/loginResponseSchema')
const rolSchema = require('./roles/rolSchema')
const rolResponseSchema = require('./roles/rolResponseSchema')
const rolesListResponseSchema = require('./roles/rolesListResponseSchema')
const characterSchema = require('./characters/characterSchema')
const characterResponseSchema = require('./characters/characterResponseSchema')
const anxietySchema = require('./anxiety/anxietySchema')
const anxietyResponseSchema = require('./anxiety/anxietyResponseSchema')
const anxietyListResponseSchema = require('./anxiety/anxietyListResponseSchema')
const depressionSchema = require('./depression/depressionSchema')
const depressionResponseSchema = require('./depression/depressionResponseSchema')
const depressionListResponseSchema = require('./depression/depressionListResponseSchema')
const professionalSchema = require('./professionals/professionalSchema')
const professionalResponseSchema = require('./professionals/professionalResponseSchema')
const professionalsListResponseSchema = require('./professionals/professionalsListResponseSchema')
const certificationSchema = require('./professionals/certificationSchema')
const certificationResponseSchema = require('./professionals/certificationResponseSchema')

module.exports = {
    User: userSchema,
    UserResponse: userResponseSchema,
    Error: errorSchema,
    LoginRequest: loginRequestSchema,
    LoginResponse: loginResponseSchema,
    Rol: rolSchema,
    RolResponse: rolResponseSchema,
    RolesListResponse: rolesListResponseSchema,
    Character: characterSchema,
    CharacterResponse: characterResponseSchema,
    Anxiety: anxietySchema,
    AnxietyResponse: anxietyResponseSchema,
    AnxietyListResponse: anxietyListResponseSchema,
    Depression: depressionSchema,
    DepressionResponse: depressionResponseSchema,
    DepressionListResponse: depressionListResponseSchema,
    Professional: professionalSchema,
    ProfessionalResponse: professionalResponseSchema,
    ProfessionalsListResponse: professionalsListResponseSchema,
    Certification: certificationSchema,
    CertificationResponse: certificationResponseSchema
}