import express from "express";
import bodyParser from 'body-parser';
import dotenv from "dotenv"; 
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import ProfessionalRouter from './routes/professionals.route.js';
import UserRouter from "./routes/user.routes.js";
import session from "express-session";
import ShareRouter from "./routes/share.route.js"

dotenv.config();

const app = express();



app.use(session({
    secret: 'your_secret_key', 
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true 
}));
app.use(cookieParser());


app.use("/user", UserRouter);
app.use('/professional', ProfessionalRouter);
app.use("/share",ShareRouter);


mongoose.connect("mongodb://localhost:27017/OneProfile").then(() => {
    console.log("MongoDB connected...");
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

export default app;

