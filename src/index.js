import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoClient from './database/db.js'
dotenv.config();

//import authRoutes from './routes/auth.route.js';

const app = express();

app.use(express.json());
app.use(cors());

// app.use(authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port ${port}`));