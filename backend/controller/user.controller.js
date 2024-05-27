import User from "../model/user.model.js";
import { upload } from '../model/user.model.js';

export const signUp = async (req, res) => {
    try {
        const { name,
            email,
            password,
            gender,
            address,
            Dob,
            contactNumber,
            pincode,
            city,
            state } = req.body;
        const image = req.file ? '/uploads/' + req.file.filename : undefined;

        const user = new User({
            name,
            email,
            password,
            gender,
            image,
            address,
            Dob,
            contactNumber,
            pincode,
            city,
            state
        });

        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await user.checkPassword(password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        res.status(200).json({ message: "Sign In Successfully", data: user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const viewUser = async (req, res) => {
    try {
        const userId = req.params._Id;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const findByemail = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const userId = req.params._Id;
        const { name, contactNumber, email, gender, address, Dob, state, city, pincode } = req.body;
        const image = req.file ? '/uploads/' + req.file.filename : undefined;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.name = name || user.name;
        user.contactNumber = contactNumber || user.contactNumber;
        user.email = email || user.email;
        user.gender = gender || user.gender;
        user.address = address || user.address;
        user.Dob = Dob || user.Dob;
        user.state = state || user.state;
        user.city = city || user.city;
        user.pincode = pincode || user.pincode;

        if (image) {
            user.image = image;
        }

        await user.save();

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const uploadMiddleware = upload.single('image');



export const remove = async (req, res) => {
    try {
        const userId = req.params._Id;
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


import bcrypt from 'bcryptjs';


export const changePassword = async (req, res) => {
    try {
        const userId = req.params._Id;
        const { oldPassword, newPassword } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid old password' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        user.password = hashedPassword;
        await user.save();
        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};







