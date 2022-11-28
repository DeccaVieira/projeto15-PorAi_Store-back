import { finalizeCollection, shoppingCartCollection } from "../database/db.js";

export async function createCheckout(req, res) {
    
  const user = res.locals.user;
  console.log(user);
  try {
    const carts = await shoppingCartCollection.find({ user: user._id }).toArray();
    const cartsWithNold = carts.map(({user, price, from, to, quantity}) => {
        return {user, price, from, to, quantity}
    })
    await finalizeCollection.insertMany(cartsWithNold);
await shoppingCartCollection.deleteMany({user:user._Id})
res.sendStatus(200);

  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
