import Business from "../model/business.model.js";

export const create = (request, response, next) => {
      console.log(request.body);

      Business.create({
            userId: request.body.userId,
            fullName: request.body.fullName,
            email: request.body.email,
            dob: request.body.dob,
            city : request.body.city,
            contact: request.body.contact,
            address: request.body.address,
            addtionalInformational:request.body.addtionalInformational

      }).then((result) => {
            return response.status(200).json({ message: "successfully created...", data: result });
      }).catch((error) => {
            console.log(error);
            return response.status(500).json({ message: "Internal server error...", error });
      });
};

export const update = (request, response, next) => {
      const userId = request.body.userId;

      if (!userId) {
            return response.status(400).json({ error: 'User ID is required for updating.' });
      }

      Business.update({
            userId: request.body.userId,
            fullName: request.body.fullName,
            email: request.body.email,
            dob: request.body.dob,
            contact: request.body.contact,
            city: request.body.city,
            addtionalInformational: request.body.addtionalInformational

      }, {
            where: { id: userId }
      })
            .then(([updatedRows]) => {
                  if (updatedRows == 1) {
                        return response.status(200).json({ message: 'User Data Update Successful.' });
                  } else {
                        return response.status(404).json({ error: 'User not found.' });
                  }
            })
            .catch(err => {
                  console.error(err);
                  return response.status(500).json({ error: 'Internal Server Error.' });
            });
};

export const view = (request, response, next) => {
      Business.findAll().
            then(result => {
                  response.status(200).json({ result: "Business Profile view Succesfully", data: result }).
                        catch(err => {
                              console.log(err);
                              response.status(404).json({ err: "Error in Can not be View" });
                        })
            })
};

export const remove = async (request, response, next) => {
      const deletedRows = await Business.destroy({ where: { id: request.body.id }, raw: true })
            .then(deletedRows => {
                  if (deletedRows > 0) {
                        return response.status(200).json({ message: 'User removed successfully.' });
                  } else {
                        return response.status(404).json({ error: 'User not found.' });
                  }
            })
            .catch(err => {
                  console.error(err);
                  return response.status(500).json({ error: 'Internal Server Error.' });
            });
};
