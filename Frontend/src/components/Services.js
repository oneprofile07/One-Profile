import React from 'react';
import './service.css';
import { Link } from 'react-router-dom';
// import React, { useEffect } from 'react';
import { useHistory, useEffect } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Services() {
    // const Confirmation = () => {
    //   const history = useHistory();

    //   useEffect(() => {
    //     const userData = localStorage.getItem('userData');
    //     if (userData) {
    //       const { email, password } = JSON.parse(userData);
    //       history.push(/userProfile/${email});
    //     } else {
    //       history.push('/signin');
    //     }
    //   }, [history]);

    //   return null;
    // };

    return <>
    <div id='service'>

        <h2 className='container text-center p-4 mt-5' >Our<span className='text-primary'> Services</span></h2>
        <div className='container align-content-center'>
            <p className='p-4 text-secondary text-center'>Digital profile cards are a modern and efficient way to showcase your identity and achievements across various aspects of your life. These cards are designed to be visually appealing and easy to share, making them perfect for personal branding, professional networking, and more. </p>
            <center>
                <hr className='w-25' />
            </center>
        </div>
        <div className="profile mt-5" style={{ margin: '0', padding: '0', top: "0" }}>
            <div className="card m-1 m-lg-3">
                <div className="content">
                    <div className="first">
                        <div className="imgBx">
                            <img src="https://c.pxhere.com/photos/08/7a/male_portrait_profile_social_media_cv_young_elegant_suit-459413.jpg!d" alt="HTML" />
                        </div>
                        <div className="contentBx">
                            <h4>Personal Profile</h4>
                            <p>Create your Personal profile</p>
                            <div>
                                <FaLinkedin className="icon linkedin-icon fs-2 m-1" />
                                <FaInstagram className="icon instagram-icon fs-2 m-1" />
                                <FaFacebook className="icon facebook-icon fs-2 m-1" />
                            </div>
                        </div>
                    </div>

                    <div className="second">
                        <h3>Personal Profile</h3>
                        <p>
                            Create your Personal profile by including your name, email, date of birth, city, mobile number, and address details to personalize your digital presence. Customize the profile to reflect your identity and preferences.
                        </p>
                        <Link style={{ color: 'black' }} to="/userprofile">Create Profile</Link>
                    </div>
                </div>
            </div>

            <div className="card m-1 m-lg-3">
                <div className="content">
                    <div className="first">
                        <div className="imgBx">
                            <img src="https://www.lensmen.ie/wp-content/uploads/2015/02/Profile-Portrait-Photographer-in-Dublin-Ireland..jpg" alt="HTML" />
                        </div>
                        <div className="contentBx">
                            <h4>Professional Profile</h4>
                            <p>Create your Professional profile</p>
                            <div>
                                <FaLinkedin className="icon linkedin-icon fs-2 m-1" />
                                <FaInstagram className="icon instagram-icon fs-2 m-1" />
                                <FaFacebook className="icon facebook-icon fs-2 m-1" />
                            </div>
                        </div>
                    </div>

                    <div className="second">
                        <h3>Professional Profile</h3>
                        <p>
                            Create your professional profile by entering details like name, organization, designation, mobile number, address, and additional information, enhancing your professional presence.
                        </p>
                        <Link style={{ color: 'black' }} to="/userprofile">Create Profile</Link>
                    </div>
                </div>
            </div>

            <div className="card m-1 m-lg-3">
                <div className="content">
                    <div className="first">
                        <div className="imgBx">
                            <img src="https://gazettereview.com/wp-content/uploads/2017/02/college-professor.jpg" alt="HTML" />
                        </div>
                        <div className="contentBx">
                            <h4>Education Profile</h4>
                            <p>Create your Education profile</p>
                            <div>
                                <FaLinkedin className="icon linkedin-icon fs-2 m-1" />
                                <FaInstagram className="icon instagram-icon fs-2 m-1" />
                                <FaFacebook className="icon facebook-icon fs-2 m-1" />
                            </div>
                        </div>
                    </div>

                    <div className="second">
                        <h3>Education Profile</h3>
                        <p>
                            Create your Education profile by inputting details like graduation marks, CGPA, years of study, date of birth, mobile number, email, and name. Customize the profile with images and logos to enhance its appearance <br />
                            <Link style={{ color: 'black' }} to="/userprofile">Create Profile</Link>
                        </p>
                    </div>
                </div>
            </div>

            <div className="card m-1 m-lg-3">
                <div className="content">
                    <div className="first">
                        <div className="imgBx">
                            <img src="https://www.sonicseo.com/wp-content/uploads/2020/07/surgeon.jpg" alt="HTML" />
                        </div>
                        <div className="contentBx">
                            <h4>Medical Profile</h4>
                            <p>Create your Medical profile</p>
                            <div>
                                <FaLinkedin className="icon linkedin-icon fs-2 m-1" />
                                <FaInstagram className="icon instagram-icon fs-2 m-1" />
                                <FaFacebook className="icon facebook-icon fs-2 m-1" />
                            </div>
                        </div>
                    </div>

                    <div className="second">
                        <h3>Medical Profile</h3>
                        <p>
                            Create your medical profile with vital information like your name, age, height, weight, blood group, and detailed medical history for comprehensive healthcare management and record-keeping.
                        </p>
                        <Link style={{ color: 'black' }} to="/userprofile">Create Profile</Link>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
}

export default Services;