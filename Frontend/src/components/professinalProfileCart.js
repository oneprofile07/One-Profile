import React, { useState, useEffect } from "react";
import axios from "axios";
import "./professinalProfileCart.css";

function ProfessionalProfileCard() {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/professional/viewById",);
                setProfileData(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="card">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="card-inner">
                    {profileData && (
                        <div>
                            <h2>Name: {profileData.fullName}</h2>
                            <p>Email: {profileData.email}</p>
                            <p>Organization: {profileData.organization}</p>
                            <p>Designation: {profileData.designation}</p>
                            <p>Date of Birth: {new Date(profileData.dateOfBirth).toLocaleDateString()}</p>
                            <p>Mobile: {profileData.mobile}</p>
                            <p>Address: {profileData.address}</p>
                            <p>Additional Info: {profileData.additionalInfo}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProfessionalProfileCard;
