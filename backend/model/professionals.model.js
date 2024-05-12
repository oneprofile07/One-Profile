import mongoose from 'mongoose';

const { Schema } = mongoose;

const professionalSchema = new Schema({
    professionalId: { type: String, unique: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', unique: true },
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

professionalSchema.pre('save', async function (next) {
    if (!this.professionalId) {
        const userPart = this.fullName.split(' ').join('_');
        const randomPart = Math.floor(1000 + Math.random() * 9000); 
        const professionalId = `${userPart}_${randomPart}`;
        this.professionalId = professionalId;
    }
    next();
});

const Professional = mongoose.model('Professional', professionalSchema);

export default Professional;
