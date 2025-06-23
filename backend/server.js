import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";

const app =express();
dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/auth', authRoutes);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`) );
