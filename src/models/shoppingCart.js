import joi from "joi";

export const shoppingCartSchema = joi.object({
    user: joi.object().required(),
    price: joi.string().required(),
    from:joi.string().required(),
    to:joi.string().required(),
    quantity:joi.string().required(),
   
  });