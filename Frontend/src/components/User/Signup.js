import React, { useState } from 'react';
import './signup.css'; // Assuming you have CSS in style.css
import { Link, useNavigate } from 'react-router-dom';
import { CiUser } from 'react-icons/ci';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { API } from '../API/URL';
import axios from 'axios';
import Swal from 'sweetalert2';

export const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        // Validate form fields
        let formValid = true;
        const newErrors = { name: '', email: '', password: '' };

        if (!name) {
            formValid = false;
            newErrors.name = 'Please enter your username.';
        }

        if (!email) {
            formValid = false;
            newErrors.email = 'Please enter your email address.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formValid = false;
            newErrors.email = 'Please enter a valid email address.';
        }

        if (!password) {
            formValid = false;
            newErrors.password = 'Please enter your password.';
        } else if (password.length < 6) {
            formValid = false;
            newErrors.password = 'Password must be at least 6 characters long.';
        }

        setErrors(newErrors);

        if (!formValid) {
            return;
        }

        try {
            const response = await axios.post(API.signUp, {
                email: email,
                name: name,
                password: password
            });
            Swal.fire({
                position:"top-center",
                icon: "success",
                title: "Sign Up Successfully",
                showConfirmButton: false,
                timer: 1500
              });
            console.log(response.data); 
            const userId = response.data._id; 
            localStorage.setItem('userId', userId); 
            localStorage.setItem("isLoggedIn",true)
            navigate("/");
           
        } catch (error) {
            console.error('Error signing up:', error);
            setErrors({ ...errors, general: 'An error occurred while signing up. Please try again.' });
        }
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        setErrors({ ...errors, name: '' }); // Reset the error message for name field
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setErrors({ ...errors, email: '' }); // Reset the error message for email field
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setErrors({ ...errors, password: '' }); // Reset the error message for password field
    };

    return (
        <>
            <img className="wave" src="./assets/wave.png" alt="wave"  />
            <div id="container">
                <div className="img">
                    <img src="./assets/icon1.png" alt="background" />
                </div>
                <div className="login-content">
                    <form id='form' onSubmit={handleSignUp}>
                        <img src="./assets/user.jpeg" alt="avatar" />
                        <h2 className="title">Welcome</h2>
                        <div className="input-div one">
                            <div className="i">
                                <CiUser style={{ color: "black", width: "50px", height: "20px" }} />
                            </div>
                            <div className="div">
                                <input type="text" className="input" placeholder='Username' value={name} onChange={handleNameChange} />
                            </div>
                        </div>
                        {errors.name && <div className="error-container"><p className="error mt-2 text-danger">{errors.name}</p></div>}
                        <div className="input-div pass">
                            <div className="i">
                                <RiLockPasswordLine style={{ color: "black", width: "50px", height: "20px" }} />
                            </div>
                            <div className="div">
                                <input type="password" className="input" placeholder='Password' value={password} onChange={handlePasswordChange} />
                            </div>
                        </div>
                        {errors.password && <div className="error-container"><p className="error mt-2 text-danger">{errors.password}</p></div>}
                        <div className="input-div pass">
                            <div className="i">
                                <AiOutlineMail style={{ color: "black", width: "50px", height: "20px" }} />
                            </div>
                            <div className="div">
                                <input type="text" className="input" placeholder='Email' value={email} onChange={handleEmailChange} />
                            </div>
                        </div>
                        {errors.email && <div className="error-container"><p className="error mt-2 text-danger">{errors.email}</p></div>}
                        <input type="submit" className="btn btn-success form-control mb-2"  value="Sign Up" />
                        {errors.general && <p className="error mt-3 text-danger">{errors.general}</p>}
                        <div className='d-flex' style={{ marginTop: "20px" }}>
                            <p style={{ marginLeft: "10px" }}>Already have an account?</p>
                            <p style={{ marginLeft: "10px" }}>
                                <Link to="/signin">Sign In</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
