import joi from "joi";

export const shoppingCartSchema = joi.object({
    user: joi.object().required(),
    price: joi.number().required(),
    from:joi.string().required(),
    to:joi.string().required(),
    quantity:joi.number().required(),
  });