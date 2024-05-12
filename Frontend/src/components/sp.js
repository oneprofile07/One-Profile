import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./sp.css";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SP = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/user/signup', {
                email: email,
                name: name,
                password: password
            });
            console.log(response.data); 
            const userId = response.data.data._id; 
            console.log(userId);
            localStorage.setItem('userId', userId); 
            Swal.fire({
                position:"top-center",
                icon: "success",
                title: "Sign Up Successfully",
                showConfirmButton: false,
                timer: 1500
              });
            navigate("/home");
           
        } catch (error) {
            console.error('Error signing up:', error);
            Swal.fire({
                icon: "error",
                title: "Sorry",
                text: "Please try Again!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
            
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="form-wrap">
                <div className="tabs">
                    <h3 className="signup-tab text-center mt-5" style={{marginLeft:"70px"}}>SignUp</h3>
                </div>

                <div className="tabs-content">
                    <div id="signup-tab-content" className="active">
                        <form className="signup-form" onSubmit={handleSignUp}>
                            <input type="email" className="input" id="user_email" autoComplete="off" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}required />
                            <input type="text" className="input" id="user_name" autoComplete="off" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                            <input type="password" className="input" id="user_pass" autoComplete="off" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <input type="submit" className="button" value="Sign Up" />
                        </form>
                        <div className="help-text">
                            <p>By signing up, you agree to our</p>
                            <p><a href="#">Terms of service</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SP;
