import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import User from '../model/user.model.js';

export const signUp = async (request, response, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(401).json({ errors: errors.array() });

    try {
        const newUser = await User.create({
            name: request.body.name,
            email: request.body.email,
            password: request.body.password
        });
        
        console.log("New User _id:", newUser._id);
        
        request.session.userId = newUser._id; 

        return response.status(200).json({ data: newUser, message: "User created." });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error.", err });
    }
};


export const signIn = async (request, response, next) => {
    const { email, password } = request.body;

    try {
        const user = await User.findOne({ email });

        if (user) {
            if (User.checkPassword(password, user.password)) {
                const token = jwt.sign({ userId: user._id }, 'secret_key', { expiresIn: '1h' });
                return response.status(200).json({ message: "Sign In Success", token });
            } else {
                return response.status(401).json({ error: "Unauthorized error" });
            }
        } else {
            return response.status(401).json({ error: "Invalid Email or Password" });
        }
    } catch (error) {
        console.error(error);
        return response.status(500).json({ error: "Internal Server Error", message: error.message });
    }
};

