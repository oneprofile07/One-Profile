import mongoose from 'mongoose';

const { Schema } = mongoose;

const professionalSchema = new Schema({
    professionalId: { type: String, unique: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User' }, // Reference to User model's ObjectId
    fullName: String,
    email: String,
    organization: String,
    designation: String,
    dateOfBirth: Date,
    mobile: String,
    address: String,
    additionalInfo: String,
    image: String,
});

// Pre-save hook to generate and set a customized professional ID
professionalSchema.pre('save', async function (next) {
    if (!this.professionalId) {
        // Customize the professional ID based on user information
        const userPart = this.fullName.split(' ').join('_'); // Convert spaces to underscores
        const randomPart = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
        const professionalId = `${userPart}_${randomPart}`;
        this.professionalId = professionalId;
    }
    next();
});

const Professional = mongoose.model('Professional', professionalSchema);

export default Professional;
