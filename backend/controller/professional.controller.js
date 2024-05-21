import Professional from '../model/professinal.model.js';
import User from '../model/user.model.js';
import multer from 'multer';
import path from 'path';

// Set storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Check file type
function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images only!');
    }
}

// Init multer upload
const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('image');

export const create = (req, res, next) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(400).json({ error: err });
        } else {
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
            } = req.body;

            const image = req.file ? req.file.path : null;

            User.findById(userId)
                .then(user => {
                    if (!user) {
                        return res.status(404).json({ error: "User not found" });
                    }

                    // Check if a professional profile already exists for this user
                    Professional.findOne({ userId })
                        .then(existingProfile => {
                            if (existingProfile) {
                                return res.status(400).json({ error: "A professional profile already exists for this user" });
                            }

                            // User exists, create professional profile
                            const newProfessional = new Professional({
                                userId,
                                fullName,
                                email,
                                organization,
                                designation,
                                dateOfBirth,
                                mobile,
                                address,
                                additionalInfo,
                                image,
                            });

                            newProfessional.save()
                                .then(result => {
                                    console.log(result);
                                    return res.status(200).json({ msg: 'Professional profile created successfully', data: result });
                                })
                                .catch(err => {
                                    console.error(err);
                                    return res.status(500).json({ error: "Internal server error" });
                                });
                        })
                        .catch(err => {
                            console.error(err);
                            return res.status(500).json({ error: "Internal server error" });
                        });
                })
                .catch(err => {
                    console.error(err);
                    return res.status(500).json({ error: "Internal server error" });
                });
        }
    });
};



export const update = async (req, res, next) => {
    try {
        const { professionalId } = req.params;
        const updateFields = req.body;

        // Find the professional profile by professionalId and update it
        const updatedProfessional = await Professional.findOneAndUpdate(
            { professionalId: professionalId },
            updateFields,
            { new: true } // To return the updated document
        );

        if (!updatedProfessional) {
            return res.status(404).json({ error: "Professional profile not found" });
        }

        return res.status(200).json({ message: "Professional profile updated successfully", data: updatedProfessional });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};



export const deleteById = async (req, res, next) => {
    try {
        const { professionalId } = req.params;

        // Find the professional profile by professionalId and delete it
        const deletedProfessional = await Professional.findOneAndDelete({ professionalId: professionalId });

        if (!deletedProfessional) {
            return res.status(404).json({ error: "Professional profile not found" });
        }

        return res.status(200).json({ message: "Professional profile deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};



export const view = async (req, res, next) => {
    try {
        const  {professionalId} = req.params;

        // Find the professional profile by professionalId
        const professionalProfile = await Professional.findOne({ professionalId: professionalId });

        if (!professionalProfile) {
            return res.status(404).json({ error: "Professional profile not found" });
        }

        return res.status(200).json({ data: professionalProfile });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const viewId = async (req, res, next) => {
    try {
        const { professionalId, userId } = req.body;

        // Validate that both professionalId and userId are provided
        if (!professionalId || !userId) {
            return res.status(400).json({ err: "professionalId and userId are required" });
        }

        // Find the professional profile using the professionalId and userId
        const professionalProfile = await Professional.find({
            professionalId: professionalId,
            userId: userId
        }).exec();
        
        if (!professionalProfile || professionalProfile.length === 0) {
            return res.status(404).json({ err: "No professional found with the given userId and professionalId" });
        }

        return res.status(200).json({ data: professionalProfile });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ err: "Internal server error" });
    }
};





