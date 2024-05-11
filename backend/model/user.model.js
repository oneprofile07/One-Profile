import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        set: function(value) {
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(value, salt);
            return hashedPassword;
        }
    },
    userId: {
        type: String,
        unique: true,
    }
});

userSchema.pre('save', function (next) {
    if (!this.userId) {
       
        const userPart = this.name.split(' ').join('_');
        const randomPart = Math.floor(1000 + Math.random() * 9000); 
        const userId = `${userPart}${randomPart}`;
        this.userId = userId;
    }
    next();
});

userSchema.statics.checkPassword = function(originalPassword, encryptedPassword) {
    return bcrypt.compareSync(originalPassword, encryptedPassword);
};

const User = mongoose.model('User', userSchema);

export default User;
