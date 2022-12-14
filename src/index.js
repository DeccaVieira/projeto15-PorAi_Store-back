import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import authRoutes from "./routes/auth.routes.js"
import catalogueRoutes from "./routes/catalogue.routes.js"
import shoppingCartRoutes from "./routes/shoppingCart.routes.js"
import checkout from "./routes/checkout.js"
const app = express();

app.use(express.json());
app.use(cors());

app.use(authRoutes);
app.use(catalogueRoutes);
app.use(shoppingCartRoutes);
app.use(checkout);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port ${port}`));