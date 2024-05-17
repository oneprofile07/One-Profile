import React, { useState } from 'react';
import './signup.css'; // Assuming you have CSS in up.css
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { CiUser } from "react-icons/ci";
import { TbPasswordUser } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


export const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make API request to localhost:3000/user/signin using Axios
            const response = await axios.post('http://localhost:3000/user/signin', {
                email,
                password
            });

            // Handle response
            const data = response.data;

            if (response.status === 200) {
                // Handle successful signin
                console.log('Signin successful');
                const userId = data.userId;
                console.log(userId);
                sessionStorage.setItem('userId', userId);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Signin successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/home");
            } else {
                // Handle signin failure
                console.error('Signin failed');
                Swal.fire({
                    icon: "error",
                    title: "Signin failed",
                    text: data.message || "Something went wrong!",
                    footer: '<a id="anchor" href="#">Why do I have this issue?</a>'
                });
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a id="anchor" href="#">Why do I have this issue?</a>'
            });
        }
    };
    return <>
        <img className="wave" src="./assets/wave.png" alt="wave" />
        <div id="container">
            <div className="img">
                <img src="./assets/icon1.png" alt="background" />
            </div>
            <div className="login-content">
                <form id='form' action="index.html" onSubmit={handleSubmit}>
                    <img src="./assets/user.jpeg" alt="avatar" />
                    <h2 className="title">Welcome</h2>
                    <div className="input-div one">
                        <div className="i">
                        <CiUser style={{color:"black",width:"50px",height:"20px"}} />
                        </div>
                        <div className="div">
                            <input type="text" className="input" placeholder='Email' value={email}  onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="input-div pass">
                        <div className="i">
                        <TbPasswordUser style={{color:"black",width:"50px",height:"20px"}} />
                        </div>
                        <div className="div">
                            <input type="password" className="input" placeholder='Password' value={password}  onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <button type="button" style={{ marginLeft: "200px", border: "none", background: "white" }} className='text-secondary' >Forgot Password?</button>
                    <input type="submit" className="btn mt-2 btn-success form-control" value="Login" /><br/>
                    <p>________________________or_____________________</p>
                    <span className='border p-3 rounded'>
                    <FcGoogle style={{ width: "50px", height: "50px" }} />&nbsp;&nbsp;&nbsp;Sign In WIth Google

                    </span>
                    <div className='d-flex' style={{ marginTop: "20px"}}>
                        <p style={{ marginLeft: "10px" }}>Don't have an account?</p>
                        <p style={{ marginLeft: "10px" }}><Link to="/signUp">Sign Up</Link></p>
                    </div>
                </form>

            </div>
        </div>
    </>

};