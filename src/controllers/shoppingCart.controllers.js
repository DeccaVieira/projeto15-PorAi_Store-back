import { ObjectId } from "mongodb";
import { shoppingCartCollection } from "../database/db.js";

export async function addShoppingCart(req, res) {
  const cart = res.locals.cart;

  try {
    await shoppingCartCollection.insertOne(cart);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function showShoppingCart(req, res) {
  const user = res.locals.user;

  try {
    const carts = await shoppingCartCollection.find({ user: user._id }).toArray();
     res.send({carts, user});

  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
export async function deleteShoppingCart(req,res){
const user = res.locals.user;
const {_id} = req.params;
try{
await shoppingCartCollection.deleteOne({_id:new ObjectId(_id)})
res.sendStatus(200);
} catch (err) {
    console.log(err);
    res.sendStatus(500);
  }

}
