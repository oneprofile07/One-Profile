import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'oneprofile07@gmail.com',
        pass: 'fxqh gotf tsnv djoj'
    }
});


export const sendOTP = (email, otp) => {

    const mailOptions = { 
        from: 'oneprofile07@gmail.com',
        to: email,
        subject: 'OTP Verification for One-Profile Application Registration',
        text: `Your OTP is: ${otp}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent successfully...');
        }
    });
};