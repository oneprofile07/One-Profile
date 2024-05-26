import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ReciveProfile = () => {
    const [shares, setShares] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchShares = async () => {
            try {
                // Assuming receiverUserId is obtained from somewhere
                const receiverUserId = localStorage.getItem("userId");
                console.log(receiverUserId)
                const response = await axios.get(`http://localhost:3000/share/getSharesWithProfile/${receiverUserId}`);
                console.log(response.data);
                setShares(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchShares();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='container'>
            <h2>Received Profiles</h2>
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        {/* Add more columns as needed */}
                    </tr>
                </thead>
                <tbody>
                    {shares.map((share, index) => (
                        <tr key={share.profile._id} onClick={()=>navigate("/ViewReciveProfile")} style={{ cursor: "pointer" }}>
                            <th scope="row">{index + 1}</th>
                            <td>{share.profile.fullName}</td>
                            <td>{share.profile.email}</td>
                            {/* Add more columns as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReciveProfile;
