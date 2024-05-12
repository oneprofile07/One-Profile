import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./card.css";
import { useLocation } from 'react-router-dom';

const Card = () => {
    const [professionalData, setProfessionalData] = useState([]);
    const { state } = useLocation();
    console.log(state);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userId = localStorage.getItem('userId');
                const response = await axios.post('http://localhost:3000/professional/viewId', { userId, _id: state });
                console.log('response.data.data', response.data);
                // Assuming response.data contains an array of professionals
                setProfessionalData(response.data.data);
            } catch (error) {
                console.error("Error fetching professional data:", error);
            }
        };

        fetchData();
    }, [state]);

    return (
        <div>
            <div className='Container'>
                <div className="background"></div>

                <div className="outer-div">
                <div className="front">
                            <div className="front__bkg-photo"></div>
                            <div className="front__face-photo"></div>
                            <div className="front__text">
                                <h3 className="front__text-header mt-2 "style={{marginLeft:"110px"}}>{professionalData.fullName}</h3>
                                <p className="front__text-para mt-3 "><i className="fas fa-map-marker-alt front-icons"></i>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{professionalData.email}</p>
                                <p className="front__text-para"><i className="fas fa-map-marker-alt front-icons"></i>Orginazation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{professionalData.organization}</p>
                                <p className="front__text-para mt-2"><i className="fas fa-map-marker-alt front-icons"></i>Designation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{professionalData.designation}</p>
                                <p className="front__text-para"><i className="fas fa-map-marker-alt front-icons"></i>Mobile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{professionalData.mobile}</p>
                                <p className="front__text-para"><i className="fas fa-map-marker-alt front-icons"></i>Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{professionalData.address}</p>
                                <p className="front__text-para"><i className="fas fa-map-marker-alt front-icons"></i>AdditionalInfo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{professionalData.additionalInfo}</p>
                               
                            </div>
                        </div>
                    {/* <div className="inner-div">
                       
                        <div className="back">
                            <div className="social-media-wrapper">

                               
                                <a href="#" className="social-icon"><i className="fab fa-codepen" aria-hidden="true"></i></a>
                                <a href="#" className="social-icon"><i className="fab fa-github-square" aria-hidden="true"></i></a>
                                <a href="#" className="social-icon"><i className="fab fa-linkedin-square" aria-hidden="true"></i></a>
                                <a href="#" className="social-icon"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Card;
