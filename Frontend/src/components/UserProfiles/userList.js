import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './UserList.css';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const userId = localStorage.getItem('userId');
    const professionalId = localStorage.getItem('professionalId');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/user/viewAllUsers');
                setUsers(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleUserClick = async (_id) => {
        try {
            const response = await axios.post('http://localhost:3000/share/add', {
               
                    senderUserId: userId,
                    receiverUserId: _id,
                    profileId: professionalId
                
            });
            setUsers(response.data);
            Swal.fire('Success', 'Profile Added successfully', 'success');
            navigate("/")

        } catch (err) {
          console.log(err)
            setError(err.message);
            Swal.fire('Error', 'Data not updated, please try again', 'error');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='container'>
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id} onClick={() => handleUserClick(user._id)} style={{ cursor: "pointer" }}>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
