import { sessionsCollection, usersCollection } from "../database/db.js";
import { userSchema } from "../models/users.model.js";
import bcrypt from "bcrypt";

export async function userSchemaValidation(req, res, next) {
  const user = req.body;
  const userExists = await usersCollection.findOne({ email: user.email });
  if (userExists) {
    return res.status(409).send({ message: "Esse email já existe" });
  }
  if (user.password !== user.validatePass) {
    return res
      .status(409)
      .send({ message: "Confirmação de senha não confere!" });
  }
  if (user.email !== user.validateEmail) {
    return res
      .status(409)
      .send({ message: "Confirmação de email não confere!" });
  }

  const { error } = userSchema.validate(user, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send(errors);
  }
  res.locals.user = user;
console.log(user, "teste")
  next();
}

export async function signInBodyValidation(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await usersCollection.findOne({ email });
    if (!user) {
      return res.sendStatus(401);
    }

    const passwordOk = bcrypt.compareSync(password, user.password);
    if (!passwordOk) {
      return res.sendStatus(401);
    }

    res.locals.user = user;
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  next();
}

export async function authRoutesValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization.replace("Bearer ", "");
console.log(token);
  if (!token) {
    return res.sendStatus(401);
  }
console.log("bbb");
  try {
    const session = await sessionsCollection.findOne({ token });
    console.log(session, "session");
    if(!session){
     return res.sendStatus(401);
    }
    console.log("ccc");
    const user = await usersCollection.findOne({ _id: session?.useId });
    console.log(user, "user");
    if (!user) {
     return res.sendStatus(401);
    }
    console.log("ddd");
    res.locals.user = user;
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
  console.log("eee");
  next();
}
