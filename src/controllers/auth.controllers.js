import { sessionsCollection, usersCollection } from "../database/db.js";
import bcrypt from "bcrypt";
import {v4 as uuidV4} from 'uuid';

export async function signUp(req, res) {
  const user = res.locals.user;
  const passwordHash = bcrypt.hashSync(user.password, 12);
  try {
    await usersCollection.insertOne({ ...user, password: passwordHash });
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function sigIn(req, res) {
    const user = res.locals.user;
    console.log(user, "user auth");
const token = uuidV4();

try{
await sessionsCollection.insertOne({token, useId: user._id});
return res.send({token, email:user.email, name:user.name, phoneNumber:user.phoneNumber})
}catch(error){
    console.log(error);
 return   res.sendStatus(500);
}
}
