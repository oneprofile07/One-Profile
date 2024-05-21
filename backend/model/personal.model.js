import mongoose from 'mongoose';

const { Schema } = mongoose;

const personalSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    allowNull: true
  },
  fullName: {
    type: String,
    required: [true, 'Full Name is required']
  },
  dob: {
    type: Date,
    required: [true, 'Date Of Birth is required']
  },
  mobile: {
    type: String,
    default: ''
  },
  city: {
    type: String,
    default: ''
  },
  address: {
    type: String,
    required: [true, 'Address is required']
  },
  additionalInformation: {
    type: String,
    default: ''
  }
}, { timestamps: true });



const Personal = mongoose.model('Personal', personalSchema);

export default Personal;
