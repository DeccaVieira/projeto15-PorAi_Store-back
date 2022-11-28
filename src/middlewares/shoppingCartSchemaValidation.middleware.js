import { shoppingCartSchema } from "../models/shoppingCart.js";

export function shoppingCartSchemaValidation(req, res, next) {
  const { price, from, to, quantity } = req.body;
  const user = res.locals.user;
  const cart = {
    price,
    from,
    to,
    quantity,
    user: user._id,
  };
  const { error } = shoppingCartSchema.validate(cart, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send(errors);
  }
  res.locals.cart = cart;

  next();
}
