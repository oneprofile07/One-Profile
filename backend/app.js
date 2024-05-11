import express from "express";
import bodyParser from 'body-parser';
import cors from "cors";
import mongoose from "mongoose";
import ProfessionalRouter from './routes/professionals.route.js';
import UserRouter from "./routes/user.routes.js";
import ShareRouter from "./routes/share.route.js";
import PersonalRouter from "./routes/personal.route.js";


const app = express();



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
app.use('/personal', PersonalRouter);

mongoose.connect("mongodb://localhost:27017/project").then(() => {
    console.log("MongoDB connected...");
    const port =  3000;
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

export default app;

