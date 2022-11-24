import joi from "joi";

export const userSchema = joi.object({
    name: joi.string().required().min(8),
    email:joi.string().email().required().min(5),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required().min(6),
    validatePass: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required().min(6),
    adress:joi.string().required().min(8),
    phoneNumber: joi.string().phoneNumber(),
    createdAt:joi.string().required(),
    })