import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";

const app =express();
dotenv.config();
const PORT = process.env.PORT || 5173;

connectDB();
app.use(cors({
    origin: 'http://localhost:5173', // or whatever your frontend port is
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use('/auth', authRoutes);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`) );

app.get('/api/', (req, res) => {
    res.json({ message: "Welcome to the homepage!" });
});

app.get('/api/vent', (req, res) => {
    res.json({ message: "This is the about page." });
});

app.get('/api/signup', (req, res) => {
    res.json({ message: "signup" });
});

app.get('/api/login', (req, res) => {
    res.json({ message: "login" });
});

app.get('/api/test', (req, res) => {
    res.json({ message: "Test route works!" });
});
