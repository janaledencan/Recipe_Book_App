import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express()
const password = process.env.MONGODB_PASSWORD;

app.use(express.json) //middleware
app.use(cors());

mongoose.connect(`mongodb+srv://janaLed:${password}@recipes.wd5trug.mongodb.net/?retryWrites=true&w=majority&appName=recipes`);

app.listen(3001, () => console.log("SERVER STARTED!")); 