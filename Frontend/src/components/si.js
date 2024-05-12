import React, { useState } from 'react';
import './si.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SI = () => {
    // State to manage form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make API request to localhost:3000/user/signin
            const response = await fetch('http://localhost:3000/user/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            // Handle response
            if (response.ok) {
                // Handle successful signin
                console.log('Signin successful');
                const userId = response.data.data._id; 
                console.log(userId);
                sessionStorage.setItem('userId', userId);
                Swal.fire({
                    position: "top-start",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });               
                   navigate("/home");
            } else {
                // Handle signin failure
                console.error('Signin failed');
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
    };

    return <>
    <ToastContainer/>
        <div className="login-box bg-dark">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label>Password</label>
                </div>
                <button type="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </button>
            </form>
        </div>

    </>

}

export default SI;
