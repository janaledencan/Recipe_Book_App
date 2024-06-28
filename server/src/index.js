import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import { userRouter } from './routes/users.js';
import { recipesRouter } from './routes/recipes.js';

dotenv.config();

const app = express();
const password = process.env.MONGODB_PASSWORD;

app.use(express.json()); //middleware
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
    `mongodb+srv://janaLed:${password}@recipes.wd5trug.mongodb.net/?retryWrites=true&w=majority&appName=recipes`
);

app.listen(3001, () => console.log("SERVER STARTED!")); 