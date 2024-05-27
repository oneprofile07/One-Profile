import express from "express";
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
// import ForgotRouter from "./route/forgot.route.js";
import PersonalRouter from "./route/personal.route.js";
import ProfessionalRouter from './route/professional.route.js';
import otpRoutes from './MailOtpSender/otpSender.route.js';
import UserRouter from "./route/user.route.js";
import session from "express-session";
import ShareRouter from "./route/share.route.js"

dotenv.config();

const app = express();

// Middleware

app.use(session({
    secret: 'your_secret_key', // Replace 'your_secret_key' with a random string
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true // enable passing credentials (cookies, authorization headers)
}));
app.use(cookieParser());

// Routes
app.use("/user", UserRouter);
app.use("/otp", otpRoutes);
app.use("/personal", PersonalRouter);
// app.use("/forgot", ForgotRouter);
app.use('/professional', ProfessionalRouter);
app.use("/share", ShareRouter);

// Database Connection
// mongodb + srv://ghanshyamkushwah623:iZ8QVUvvuxD3PSZW@cluster0.2z3cj1e.mongodb.net/testing
mongoose.connect("mongodb://localhost:27017/oneprofile", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected...");
        // Start the server after successful database connection
        const port = 3000;
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    }).catch(err => {
        console.error("MongoDB connection error:", err);
    });


export default app;

