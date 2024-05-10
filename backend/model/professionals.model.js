const { Schema } = mongoose;
import mongoose from 'mongoose';

const professionalSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' }, 
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

const Professional = mongoose.model('Professional', professionalSchema);

export default Professional;
