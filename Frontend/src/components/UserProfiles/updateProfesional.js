import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const UpdateProfessional = () => {
    // const [formData, setFormData] = useState({
    //     fullName: '',
    //     email: '',
    //     organization: '',
    //     designation: '',
    //     mobile: '',
    //     address: '',
    //     additionalInfo: '',
    //     dateOfBirth: ''
    // });

    // const location = useLocation();
    // const navigate = useNavigate();
    // const professionalId = location.state?.professionalId;
    // const profileData = location.state?.profileData;
    // console.log("profileData: ",profileData)
    // const userId = localStorage.getItem('userId');

    // // useEffect(() => {
    // //     if (userId && professionalId) {
    // //         axios.post("http://localhost:3000/professional/viewByUserId", { userId, professionalId })
    // //             .then(response => {
    // //                 const profileData = response.data.data;
    // //                 setFormData({
    // //                     fullName: profileData.fullName || '',
    // //                     email: profileData.email || '',
    // //                     organization: profileData.organization || '',
    // //                     designation: profileData.designation || '',
    // //                     mobile: profileData.mobile || '',
    // //                     address: profileData.address || '',
    // //                     additionalInfo: profileData.additionalInfo || '',
    // //                     dateOfBirth: profileData.dateOfBirth || ''
    // //                 });
    // //             })
    // //             .catch(err => {
    // //                 console.log(err);
    // //             });
    // //     }
    // // }, [userId, professionalId]);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios.put(`http://localhost:3000/professional/update/${professionalId}`, formData)
    //         .then(response => {
    //             console.log("Data updated successfully", response.data);
    //             Swal.fire('Success', 'Data updated successfully', 'success');
    //             // Navigate back to the previous page on success
    //             navigate(-1);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             // Optionally, add an error message to the user
    //         });
    // };

    const location = useLocation();
    const navigate = useNavigate();
    // const professionalId = location.state?.professionalId;
    const profileData = location.state?.profileData;
    const userId = localStorage.getItem('userId');
    const professionalId = localStorage.getItem('professionalId');

    console.log("professionalId: ",professionalId);

    // Set initial form data using profileData
    const [formData, setFormData] = useState({
        fullName: profileData[0].fullName || '',
        email:profileData[0].email || '',
        organization:profileData[0].organization || '',
        designation: profileData[0].designation || '',
        mobile: profileData[0].mobile || '',
        address: profileData[0].address || '',
        additionalInfo: profileData[0].additionalInfo || '',
        dateOfBirth:profileData[0].dateOfBirth  || ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/professional/update/${professionalId}`, formData)
            .then(response => {
                console.log("Data updated successfully", response.data);
                Swal.fire('Success', 'Data updated successfully', 'success');
                // Navigate back to the previous page on success
                navigate(-1);
            })
            .catch(err => {
                console.log(err);
                // Optionally, add an error message to the user
            });
    };

    const[disable, setdisable]= useState(1)



    return (
        <div className="card-body pt-1">
            <h4 className="mb-4 fw-bold text-center">Edit Professional Details</h4>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col-sm-3 mb-2">
                        <h6 className="mb-0">Full Name:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <input
                            type="text"
                            disabled={disable}
                            className="form-control fs-6"
                            placeholder="Enter Full Name"
                            name="fullName"
                           value =  {formData.fullName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3 mb-2">
                        <h6 className="mb-0">Email:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <input
                            type="email"
                            disabled={disable}
                            className="form-control fs-6"
                            placeholder="Enter Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3 mb-2">
                        <h6 className="mb-0">Organization:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <input
                            type="text"
                            disabled={disable}
                            className="form-control fs-6"
                            placeholder="Enter Organization Name"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3 mb-2">
                        <h6 className="mb-0">Designation:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <input
                            type="text"
                            disabled={disable}
                            className="form-control fs-6"
                            placeholder="Enter Designation"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3 mb-2">
                        <h6 className="mb-0">Mobile:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <input
                            type="text"
                            disabled={disable}
                            className="form-control fs-6"
                            placeholder="Enter Contact"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3 mb-2">
                        <h6 className="mb-0">Address:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <input
                            type="text"
                            disabled={disable}
                            className="form-control fs-6"
                            placeholder="Enter Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3 mb-2">
                        <h6 className="mb-1">Additional Info:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <input
                            type="text"
                            disabled={disable}
                            className="form-control fs-6"
                            placeholder="Enter Additional Info"
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3 mb-2">
                        <h6 className="mb-0">Date Of Birth:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <input
                            type="date"
                            pattern="\d{4}-\d{2}-\d{2}"
                            disabled={disable}
                            className="form-control fs-6"
                            // placeholder={formData.dateOfBirth}
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-9 text-secondary gap-2 d-flex">
                        <button type="button" className="btn btn-dark p-1 py-2" onClick={() => navigate(-1)}>
                            --- Back ---
                        </button>
                        <button type="submit" className="btn btn-dark p-1 py-2">
                            Submit
                        </button>
                        <button type="button" onClick={() => setdisable(false)} className="btn btn-dark p-1 py-2">
                            Update
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
