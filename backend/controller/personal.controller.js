import Personal from "../model/personal.model.js";
import User from '../model/user.model.js';
import multer from 'multer';
import path from 'path';


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
  }
});

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

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
      checkFileType(file, cb);
  }
}).single('image');

export const create = (request, response, next) => {
  upload(request, response, (err) => {
    if (err) {
        return response.status(400).json({ error: err });
    } else {
        const {
          userId,
          fullName,
          email,
          dob,
          mobile,
          city,
          address,
          additionalInformation
      } = request.body;
      const image = request.file ? request.file.path : null;
      User.findById(userId)
                .then(user => {
                    if (!user) {
                        return res.status(404).json({ error: "User not found" });
                    }

                    Personal.findOne({ userId })
                        .then(existingProfile => {
                            if (existingProfile) {
                                return res.status(400).json({ error: "A Personal profile already exists for this user" });
                            }

                            
                            const newPersonal = new Personal({
                              userId,
                              fullName,
                              email,
                              dob,
                              mobile,
                              city,
                              address,
                              image,
                              additionalInformation
                          });
                          newPersonal.save()
                          .then(result => {
                              console.log(result);
                              return response.status(200).json({ msg: 'Personal profile created successfully', data: result });
                          })
                          .catch(err => {
                              console.log(err);
                              return response.status(500).json({ err: "Internal server error" , err});
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
    const { personalId } = req.params;
    const updateFields = req.body;

    const updatedPersonal = await Personal.findOneAndUpdate(
        { personalId: personalId },
        updateFields,
        { new: true } 
    );
    if (!updatedPersonal) {
        return res.status(404).json({ error: "Personal profile not found" });
    }

    return res.status(200).json({ message: "Personal profile updated successfully", data: updatedPersonal });
} catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
}
};


export const view = async (req, res, next) => {
  try {
      const { personalId } = req.params;

      const personalProfile = await Personal.findOne({ personalId: personalId });

      if (!personalProfile) {
          return res.status(404).json({ error: "Personal profile not found" });
      }

      return res.status(200).json({ data: personalProfile });
  } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
  }
};



export const deleteById = async (req, res, next) => {
  try {
      const { personalId } = req.params;

      const deletedPersonal = await Personal.findOneAndDelete({ personalId: personalId });

      if (!deletedPersonal) {
          return res.status(404).json({ error: "Personal profile not found" });
      }

      return res.status(200).json({ message: "Personal profile deleted successfully" });
  } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
  }
};
