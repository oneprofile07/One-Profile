import React, { useRef } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import google from '../image/google.png';
import { FcGoogle } from 'react-icons/fc';

function GoogleSign() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    // Google login hook
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            console.log("ygfvteuv..............");
            console.log(codeResponse);
            Userdata(codeResponse);
        },
        onError: (error) => console.log('Login Failed:', error),
    });

    // Function to handle sign in
    const signin = async () => {
        try {
            const email = emailRef.current;

            let result = await axios.post('http://localhost:3000/user/findbyemail', { email });
            console.log(result.data);

            if (!result.data) {
                let res = await axios.post('http://localhost:3000/user/signup', {
                    name: nameRef.current,
                    email: email,
                    password: passwordRef.current
                });

                if (res.data) {
                    let user = JSON.stringify(res.data);
                    localStorage.setItem("user", user);
                    localStorage.setItem("userId", res.data._id);
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Account Created Successfully",
                        showConfirmButton: false,
                        timer: 3000
                    });
                    navigate("/");
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Unauthorized User",
                        text: "Something went wrong",
                        footer: '<a href="/">create a new one?</a>'
                    });
                }
            } else {
                // User exists, log them in
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 3000
                });
                let user = JSON.stringify(result.data);
                localStorage.setItem("user", user);
                localStorage.setItem("userId", result.data._id);
                navigate("/");
            }
        } catch (error) {
            console.log(error.response ? error.response.data.message : error.message);
        }
    }


    const Userdata = (userData) => {
        if (userData && userData.access_token) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userData.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${userData.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    console.log(res.data);
                    console.log("data................");
                    nameRef.current = res.data.name;
                    emailRef.current = res.data.email;
                    passwordRef.current = res.data.id;
                    console.log(nameRef.current);
                    signin();
                })
                .catch((err) => console.log(err.response.data.error.message));
        }
    };

    return (
        <div className="input-group mb-3">
            <button className="btn btn-lg btn-light w-100 fs-6" onClick={login}>
                <img src={google} style={{ width: "20px", height: "20px" }} className="me-2" alt="Google Logo" />
                <small style={{ fontFamily: 'Poppins, sans-serif' }}>&nbsp;Continue with Google</small>
            </button>
            {/* <span className='border p-3 rounded'>
                <FcGoogle style={{ width: "50px", height: "50px" }} />&nbsp;&nbsp;&nbsp;Sign In WIth Google
            </span> */}
        </div>
    );
}

export default GoogleSign;
