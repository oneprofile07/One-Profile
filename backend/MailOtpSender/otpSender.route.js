// import express from 'express';
// import { generateOTP, otpStore } from '../MailOtpSender/otpSender.model.js';
// import { sendOTP } from './otpSender.Controller.js';

// const router = express.Router();

// router.post('/request-otp', (req, res) => {
//     const { email } = req.body;
//     const otp = generateOTP();
//     otpStore[email] = otp;
//     sendOTP(email, otp);
//     res.status(200).json({ message: 'OTP sent successfully' })
// });

// router.post('/verify-otp', (req,res) => {
//     const { email, otp } = req.body;
//     const storedOTP = otpStore[email];
//     try {
//         if (storedOTP == otp) {
//             res.status(200).json({ message: 'OTP verified successfully' });
//             delete otpStore[email];
//         } else {
//             res.status(404).json({ error: "Invalid OTP" });
//         }
//     } catch (err) {
//         console.log(err);
//         res.status(404).json({ error: "Internal Server Error..." });
//     }
// });

// export default router;


import express from 'express';
import { generateOTP, otpStore } from '../MailOtpSender/otpSender.model.js';
import { sendOTP } from './otpSender.Controller.js';

const router = express.Router();

// Endpoint to request OTP
router.post('/request-otp', (req, res) => {
    try {
        const { email } = req.body;
        
        // Generate OTP
        const otp = generateOTP();
        
        // Store OTP for the email
        otpStore[email] = otp;
        
        // Send OTP to the email
        sendOTP(email, otp);
        
        // Respond with success message
        res.status(200).json({ message: 'OTP sent successfully', email });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Endpoint to verify OTP
router.post('/verify-otp', (req, res) => {
    try {
        const { email, otp } = req.body;
        
        // Retrieve stored OTP for the email
        const storedOTP = otpStore[email];
        
        // Check if OTP matches
        if (storedOTP === otp) {
            // If OTP matches, respond with success message and delete OTP from store
            delete otpStore[email];
            res.status(200).json({ message: 'OTP verified successfully', email });
        } else {
            // If OTP does not match, respond with error message
            res.status(400).json({ error: 'Invalid OTP' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
