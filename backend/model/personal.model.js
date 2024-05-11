import mongoose from 'mongoose';

const { Schema } = mongoose;

const personalSchema = new Schema({
  personalId: { type: String, unique: true },
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
  image: {
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
const getCollectionSize = async () => {
  try {
      const count = await Personal.countDocuments();
      return count;
  } catch (error) {
      console.error('Error getting collection size:', error);
      return null;
  }
};

personalSchema.pre('save', async function (next) {
  if (!this.personalId) {
      const collectionSize = await getCollectionSize()+1;
      const userPart = 'PE'+this.fullName.split(' ').join('_');
      const randomPart = collectionSize.toString().padStart(4, '0'); 
      const personalId = `${userPart}_${randomPart}`;
      this.personalId = personalId;
  }
  next();
});
const Personal = mongoose.model('Personal', personalSchema);

export default Personal;
