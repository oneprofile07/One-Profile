import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import multer from 'multer';

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female','male','female', 'Other']
    },
    image: {
        type: String
    },
    contactNumber: {
        type: String,
        // validate: {
        //     validator: function(v) {
        //         return /^\d{10}$/.test(v); // Ensures the mobile number contains exactly 10 digits
        //     },
        //     message: props => `${props.value} is not a valid mobile number!`
        // },
        // required: [true, 'User mobile number required'],
    },
    address: {
        type: String
    },
    Dob: {
        type: Date
    },
    state:{
        type:String
    },
    city:{
        type: String
    },
    pincode:{
        type: String
    }
    
});

// Password hashing middleware
userSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Method to check password
userSchema.methods.checkPassword = function(originalPassword) {
    return bcrypt.compare(originalPassword, this.password);
};

const User = mongoose.model('User', userSchema);

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

export const upload = multer({ storage: storage });

export default User;


