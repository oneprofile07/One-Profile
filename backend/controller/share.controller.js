import Share from "../model/share.model.js";
import mongoose from "mongoose";

export const  add = async (req, res) => {
  try {
    const { senderUserId, receiverUserId, profileId } = req.body;
    const newShare = await Share.create({ senderUserId, receiverUserId, profileId });
    res.status(201).json(newShare);
  } catch (error) {
    console.error("Error creating share:", error);
    res.status(500).json({ error: 'Server error' });
  }
};


const ObjectId = mongoose.Types.ObjectId; 

export const getSharesWithProfile = async (req, res) => {
  try {
    const receiverUserId = req.params.receiverUserId;

    const aggregationPipeline = [
      {
        $match: {
          receiverUserId: new ObjectId(receiverUserId) 
        }
      },
      {
        $lookup: {
          from: 'professionals',
          localField: 'profileId',
          foreignField: '_id',
          as: 'profile'
        }
      },
      {
        $unwind: '$profile'
      },
      {
        $project: {
          _id: 0,
          profile: 1
        }
      }
    ];

    const result = await Share.aggregate(aggregationPipeline);

    res.json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
