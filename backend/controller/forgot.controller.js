// import User from "../model/user.model.js";

// export const forgot = (request,response,next)=>{
//     const {email} = req.body;
//     User.findOne({email: email})
//     .then(user => {
//         if(!user) {
//             return res.send({Status: "User not existed"})
//         } 
//         const token = jwt.sign({id: user._id}, "jwt_secret_key", {expiresIn: "1d"})
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'oneprofile07@gmail.com',
//                 pass: 'fxqh gotf tsnv djoj'
//             }
//         });
          
//           var mailOptions = {
//             from: 'oneprofile07@gmail.com',
//             to: email,
//             subject: 'Reset Password Link',
//             text: `http://localhost:3001/reset_password/${user._id}/${token}`
//         };
          
//           transporter.sendMail(mailOptions, function(error, info){
//             if (error) {
//               console.log(error);
//             } else {
//               return res.send({Status: "Success"})
//             }
//           });
//     })
// }

// export const reset = ()=>{
//     const {id, token} = req.params
//     const {password} = req.body

//     jwt.verify(token, "jwt_secret_key", (err, decoded) => {
//         if(err) {
//             return res.json({Status: "Error with token"})
//         } else {
//             bcrypt.hash(password, 10)
//             .then(hash => {
//                 UserModel.findByIdAndUpdate({_id: id}, {password: hash})
//                 .then(u => res.send({Status: "Success"}))
//                 .catch(err => res.send({Status: err}))
//             })
//             .catch(err => res.send({Status: err}))
//         }
//     })
// }



// import nodemailer from "nodemailer";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
// import UserModel from "../model/user.model.js";

// export const forgot = (request, response, next) => {
//     const { email } = request.body;
//     UserModel.findOne({ email: email })
//         .then(user => {
//             if (!user) {
//                 return response.send({ Status: "User not existed" });
//             }
//             const token = jwt.sign({ id: user._id }, "jwt_secret_key", { expiresIn: "1d" });
//             const transporter = nodemailer.createTransport({
//                 service: 'gmail',
//                 auth: {
//                     user: 'oneprofile07@gmail.com',
//                     pass: 'fxqh gotf tsnv djoj'
//                 }
//             });

//             var mailOptions = {
//                 from: 'oneprofile07@gmail.com',
//                 to: email,
//                 subject: 'Reset Password Link',
//                 text: `http://localhost:3001/reset_password/${user._id}/${token}`
//             };

//             transporter.sendMail(mailOptions, function (error, info) {
//                 if (error) {
//                     console.log(error);
//                 } else {
//                     return response.send({ Status: "Success" });
//                 }
//             });
//         })
//         .catch(error => {
//             console.error(error);
//             response.status(500).send({ Status: "Internal Server Error" });
//         });
// };

// export const reset = (request, response) => {
//     const { id, token } = request.params;
//     const { password } = request.body;

//     jwt.verify(token, "jwt_secret_key", (err, decoded) => {
//         if (err) {
//             return response.json({ Status: "Error with token" });
//         } else {
//             bcrypt.hash(password, 10)
//                 .then(hash => {
//                     UserModel.findByIdAndUpdate(id, { password: hash })
//                         .then(() => response.send({ Status: "Success" }))
//                         .catch(err => response.status(500).send({ Status: "Internal Server Error" }));
//                 })
//                 .catch(err => response.status(500).send({ Status: "Internal Server Error" }));
//         }
//     });
// };
