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
  email: {
    type: String
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
  imgUrl: {
    type: String
  },
  additionalInformation: {
    type: String,
    default: ''
  }
}, { timestamps: true });

// personalSchema.pre('save', function (next) {
//   // Logic to execute before saving the document
//   next();
// });

const Personal = mongoose.model('Personal', personalSchema);

export default Personal;
