import Professional from '../model/professionals.model.js';
import User from '../model/user.model.js';

export const create = (req, res, next) => {
    const {
        userId,
        fullName,
        email,
        organization,
        designation,
        dateOfBirth,
        mobile,
        address,
        additionalInfo,
        image
    } = req.body;

    const newProfessional = new Professional({
        userId: userId,
        fullName: fullName,
        email: email,
        organization: organization,
        designation: designation,
        dateOfBirth: dateOfBirth,
        mobile: mobile,
        address: address,
        additionalInfo: additionalInfo,
        image: image
    });

    newProfessional.save()
        .then(result => {
            console.log(result);
            return res.status(200).json({ msg: 'Professional profile created successfully', data: result });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({ err: "Internal server error" });
        });
};

export const view = (req, res, next) => {
    Professional.find()
        .then(result => {
            console.log(result);
            return res.status(200).json({ data: result });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({err:"internal server error"});
        })
}

export const viewById = (req, res, next) => {
    const userId = req.params.userId; 

    Professional.find({ userId: userId })
        .then(result => {
            if (!result) {
                return res.status(404).json({ err: "No professionals found for the given user" });
            }
            return res.status(200).json({ data: result });
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({ err: "Internal server error" });
        });
};



export const viewId = async (req, res ,next) => {
    try {
        const { userId, _id } = req.body; 

        const professionalProfile = await Professional.findOne({ userId, _id }); 
        if (!professionalProfile) {
            return res.status(404).json({ err: "No professional found with the given userId and _id" });
        }
        return res.status(200).json({ data: professionalProfile });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ err: "Internal server error" });
    }
};




