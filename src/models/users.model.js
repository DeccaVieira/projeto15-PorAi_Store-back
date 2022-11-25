import joi from "joi";

export const userSchema = joi.object({

  name: joi.string().required().min(8),
  email: joi.string().email().required(),
  validateEmail: joi.string().email().required(),
  password: joi.string().required(),
  validatePass: joi.string().required(),
  // gender: joi
  //   .string()
  //   .required()
  //   .valid("feminino", "masculino", "prefiro não informar")
  //   .required(),
  phoneNumber: joi.string().required(),
});

