import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { IoIosShareAlt } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import './ViewReciveProfile.css';

export const ViewReciveProfile = () => {
    const templates = [
        { img1: "./Images/21.png", img2: "./Images/21.png", textcolor: "black" },
        { img1: "./Images/15.png", img2: "./Images/15.png", textcolor: "black" },
        { img1: "./Images/1.png", img2: "./Images/1.png", textcolor: "white" },
        { img1: "./Images/2.png", img2: "./Images/3.png", textcolor: "black" },
        { img1: "./Images/4.png", img2: "./Images/5.png", textcolor: "black" },
        { img1: "./Images/6.png", img2: "./Images/21.png", textcolor: "black" },
        { img1: "./Images/7.png", img2: "./Images/21.png", textcolor: "black" },
        { img1: "./Images/8.png", img2: "./Images/21.png", textcolor: "black" },
        { img1: "./Images/9.png", img2: "./Images/15.png", textcolor: "black" },
        { img1: "./Images/10.png", img2: "./Images/22.png", textcolor: "black" },
        { img1: "./Images/11.png", img2: "./Images/20.png", textcolor: "black" },
        { img1: "./Images/12.png", img2: "./Images/12.png", textcolor: "white" },
        { img1: "./Images/13.png", img2: "./Images/13.png", textcolor: "white" },
        { img1: "./Images/14.png", img2: "./Images/15.png", textcolor: "black" },
        { img1: "./Images/16.png", img2: "./Images/17.png", textcolor: "black" },
        { img1: "./Images/18.png", img2: "./Images/18.png", textcolor: "white" },
        { img1: "./Images/19.png", img2: "./Images/19.png", textcolor: "white" }
    ];

    const navigate = useNavigate();
    const [profileData, setProfileData] = useState([]);
    const [professionalProfileCard, setProfessionalProfileCard] = useState(templates[0]); // Default template

    useEffect(() => {
        const receiverUserId = localStorage.getItem("userId");
        axios.get(`http://localhost:3000/share/getSharesWithProfile/${receiverUserId}`)
            .then(response => {
                setProfileData(response.data);
            })
            .catch(error => {
                console.error('Error fetching profile data:', error);
                Swal.fire('Error', 'Failed to fetch profiles', 'error');
            });
    }, []);

    return (
        <div className="container mt-5 ">
            <h2 className="text-center mb-4">Received Profiles</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {profileData && profileData.length > 0 ? (
                    profileData.map((profile, index) => (
                        <div key={index} className="col">
                            <div className="card h-100 text-center" style={{ color: professionalProfileCard.textcolor, background: `url(${professionalProfileCard.img1}) center/cover no-repeat` }}>
                                <div className="card-body">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="card-img-top rounded-circle bg-light border border-3 border-secondary p-1 bg-light mx-auto d-block" width="120px" height="120px" alt="Profile" />
                                    <h5 className="card-title text-secondary fs-6 mt-3">{profile.profile.designation}</h5>
                                    <p className="card-text fs-3 fw-bold">{profile.profile.fullName}</p>
                                    <p className="card-text text-secondary">
                                        <IoIosShareAlt className="me-1" />
                                        {profile.profile.mobile}
                                    </p>
                                    <p className="card-text text-secondary">
                                        <IoIosShareAlt className="me-1" />
                                        {profile.profile.email}
                                    </p>
                                    <p className="card-text text-secondary">
                                        <IoIosShareAlt className="me-1" />
                                        {profile.profile.address}
                                    </p>
                                    <p className="card-text text-secondary">
                                        <IoIosShareAlt className="me-1" />
                                        {profile.profile.organization}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No profiles found</p>
                )}
            </div>
            <div className="template-selection mt-5">
                <h5 className="text-center">Select Profile Template</h5>
                <div className="d-flex justify-content-center flex-wrap">
                    {templates.map((img, index) => (
                        <div key={index} className={`template-card ${img === professionalProfileCard ? 'selected' : ''}`} onClick={() => setProfessionalProfileCard(img)}>
                            <img src={img.img1} alt="Template" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
