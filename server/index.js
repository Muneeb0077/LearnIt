import express from 'express';
import dbConnect from './database/dbConnect.js';
import dotenv from 'dotenv';
import userRoute from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

dotenv.config({});
app.use(express.json()); //middleware to parse json data
app.use(cookieParser()); //middleware to parse cookies
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
})); //middleware to handle cors
app.use("/api/v1/user",userRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

dbConnect();

