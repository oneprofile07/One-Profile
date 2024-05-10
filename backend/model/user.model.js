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
    }
});

userSchema.statics.checkPassword = function(originalPassword, encryptedPassword) {
    return bcrypt.compareSync(originalPassword, encryptedPassword);
};

const User = mongoose.model('User', userSchema);

export default User;
