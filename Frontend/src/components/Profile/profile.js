import React, { useState, useEffect } from 'react';
import './profile.css';

function OneProfile() {
    const [signIn, setSignIn] = useState(true);

    useEffect(() => {
        const container = document.getElementById('container');
        if (container) {
            container.classList.toggle('sign-in', signIn);
            container.classList.toggle('sign-up', !signIn);
        }
    }, [signIn]);

    const toggle = () => {
        setSignIn(prevSignIn => !prevSignIn);
    }

    return (
        <section className='w-100 position-fixed' style={{ backgroundColor: 'skyblue',height:'100vh' }}>
            <div id="container" className="mt-5  rounded container">
                <div className="row">
                    <div className="col align-items-center flex-col sign-up">
                        <div className="form-wrapper align-items-center">
                            <div className="form sign-up">
                                <div className="input-group">
                                    <i className='bx bxs-user'></i>
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div className="input-group">
                                    <i className='bx bx-mail-send'></i>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="input-group">
                                    <i className='bx bxs-lock-alt'></i>
                                    <input type="password" placeholder="Password" />
                                </div>
                                <div className="input-group">
                                    <i className='bx bxs-lock-alt'></i>
                                    <input type="password" placeholder="Confirm password" />
                                </div>
                                <button>Sign up</button>
                                <p>
                                    <span>Already have an account?</span>
                                    <b className="pointer" onClick={toggle}>Sign in here</b>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col align-items-center flex-col sign-in">
                        <div className="form-wrapper align-items-center">
                            <div className="form sign-in">
                                <div className="input-group">
                                    <i className='bx bxs-user'></i>
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div className="input-group">
                                    <i className='bx bxs-lock-alt'></i>
                                    <input type="password" placeholder="Password" />
                                </div>
                                <button>Sign in</button>
                                <p><b>Forgot password?</b></p>
                                <p>
                                    <span>Don't have an account?</span>
                                    <b className="pointer" onClick={toggle}>Sign up here</b>
                                </p>
                            </div>
                        </div>
                        <div className="form-wrapper"></div>
                    </div>
                </div>
                <div className="row content-row">
                    <div className="col  flex-col">
                        <div className="text sign-in">
                            <h2 className='' style={{marginLeft:'-50px'}}>Welcome <br/>Back</h2>
                        </div>
                        <div className="img sign-in"></div>
                    </div>
                    <div className="col align-content-end flex-col">
                        <div className="img sign-up"></div>
                        <div className="text sign-up">
                            <h2>Join with us</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OneProfile;
