import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

function Send() {
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const { state } = useLocation();
    console.log(state);

    const handleSubmit = async () => {
        if (!userId) {
            toast.error('Please enter a valid UserId');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/share/add', {
                userId: userId,
                professionalId: state,
            });

            if (response.status == 200) {
                toast.success('Profile shared successfully');
                navigate("/home");
                console.log('Profile shared successfully');
            } else {
                toast.error('Profile not shared. Please try again.');
                console.error('Submission failed:', response.statusText);
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
            console.error('Error submitting data:', error);
        }
    };

    return <>
            <ToastContainer />
        <div className="container">
            <div className="subscribe bg-success mt-5" style={{ marginLeft: '100px' }}>
                <p>SUBSCRIBE</p>
                <input
                    placeholder="Enter UserId"
                    className="subscribe-input"
                    name="userId"
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <br />
                <div className="submit-btn mt-3" onClick={handleSubmit} style={{ cursor: 'pointer' }}>
                    SUBMIT
                </div>
            </div>
        </div>
    </>
    
    
}

export default Send;
