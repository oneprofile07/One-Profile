import Personal from "../model/personal.model.js";

export const create = (request, response, next) => {
  const {
    userId,
    fullName,
    email,
    dob,
    mobile,
    city,
    address,
    imgUrl,
    additionalInformation
} = request.body;

const newPersonal = new Personal({
    userId : userId,
    fullName : fullName,
    email : email,
    dob : dob,
    mobile : mobile,
    city : city,
    address : address,
    imgUrl : imgUrl,
    additionalInformation : additionalInformation
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

};

export const update = async (request, response, next) => {
  const userId = request.body.userId;

  try {
    if (!userId) {
      return response.status(400).json({ error: 'User ID is required for updating.' });
    }

    const updatedPersonal = await Personal.findByIdAndUpdate(userId, request.body, { new: true });

    if (updatedPersonal) {
      return response.status(200).json({ message: 'User Data Updated Successfully.', data: updatedPersonal });
    } else {
      return response.status(404).json({ error: 'User not found.' });
    }
  } catch (error) {
    return response.status(500).json({ error: 'Internal Server Error.', message: error.message });
  }
};

export const view = (request, response, next) => {
  Personal.find({})
    .then(result => {
      return response.status(200).json({ data: result });
    })
    .catch(err => {
      return response.status(500).json({ error: "Internal Server Error.", message: err.message });
    });
};

export const remove = async (request, response, next) => {
  try {
    const deletedPersonal = await Personal.findByIdAndDelete(request.body.id);
    if (deletedPersonal) {
      return response.status(200).json({ message: 'User removed successfully.' });
    } else {
      return response.status(404).json({ error: 'User not found.' });
    }
  } catch (err) {
    console.error(err);
    return response.status(500).json({ error: 'Internal Server Error.', message: err.message });
  }
};
