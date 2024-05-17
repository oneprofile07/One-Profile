import mongoose from "mongoose";
 

const shareSchema = new mongoose.Schema({
  senderUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  receiverUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Professional', 
    required: true
  },
  sharedDate: {
    type: Date,
    default: Date.now
  },
});

const Share = mongoose.model('Share', shareSchema);

export default Share;
