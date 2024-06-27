import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import { userRouter } from './routes/users.js';

dotenv.config();

const app = express();
const password = process.env.MONGODB_PASSWORD;

app.use(express.json()); //middleware
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(
    `mongodb+srv://janaLed:${password}@recipes.wd5trug.mongodb.net/?retryWrites=true&w=majority&appName=recipes`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.listen(3001, () => console.log("SERVER STARTED!")); 