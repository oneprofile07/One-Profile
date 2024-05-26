import { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import ProfessionalProfile from './professionalProfile';
import MedicalProfile from './medicalProfile';
import EducationProfile from './educationProfile';
import PersonalProfile from './personalProfile';
import CustomizedProfile from './customizedProfile';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
export default function UserProfile() {
    const navigate = useNavigate();
    const Name = document.getElementById('name');
    const Email = document.getElementById('email');
    const ContactNumber = document.getElementById('contactNumber');
    const State = document.getElementById('state');
    const City = document.getElementById('city');
    const Address = document.getElementById('address');
    const Pincode = document.getElementById('pincode');
    const [userData, setuserData] = useState([]);
    const [userData2, setuserData2] = useState([]);
    let _Id = localStorage.getItem('userId');

    // let id = 1;
    const UserInformation = () => {
        setbuttondisplyblock(true)
        setbuttondisplyblock2(true)
        axios.get(`http://localhost:3000/user/viewById/${_Id}`)
            .then(response => {
                setuserData(response.data);
                setuserData2(response.data);
                setdisabledinput(1);
            }).catch(err => {
                console.log(err);
            })
    };
    useEffect(() => {
        UserInformation();
    }, [localStorage.getItem('userId')]);
    // }, [1]);

    const [disabledinput, setdisabledinput] = useState(1);
    const [buttondisplyblock, setbuttondisplyblock] = useState(true);
    const [buttondisplyblock2, setbuttondisplyblock2] = useState(true);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [contactNumber, setcontactNumber] = useState("");
    const [gender, setgender] = useState("");
    const [state, setstate] = useState("");
    const [city, setcity] = useState("");
    const [address, setaddress] = useState("");
    const [pincode, setpincode] = useState("");
    const [oldPassword, setoldpassword] = useState("");
    const [newPassword, setnewpassword] = useState("");
    const [conformpassword, setconformpassword] = useState("");

    const PersonalInformation = () => {
        if (_Id !== "" && name !== "" && email !== "" && contactNumber !== "" && gender !== "") {
            if (userData2 !== "") {
                toast.info("every thing is uptodate")
            } axios.put(`http://localhost:3000/user/updateById/${_Id}`, { name, email, contactNumber, gender })
                .then(response => {
                    toast.success("Personal Information updated !");
                    UserInformation();
                }).catch(err => {
                    console.log(err);
                    toast.error("Incorrect Information");
                })
        } else {
            if (userData2 !== "") {
                toast.info("every thing is uptodate")
            } else {
                toast.warning("Plese fill the all fields !");
            }
        }
    };

    const MyAddress = () => {
        if (_Id !== "" && state !== "" && city !== "" && address !== "" && pincode !== "") {
            if (userData2 !== "") {
                toast.info("every thing is uptodate")
            } axios.put(`http://localhost:3000/user/updateById/${_Id}`, { state, city, address, pincode })
                .then(response => {
                    toast.success("Address Updated !");
                    UserInformation();
                }).catch(err => {
                    console.log(err);
                    toast.error("Incorrect Information");
                })
        } else {
            if (userData2 !== "") {
                toast.info("every thing is uptodate")
            } else {
                toast.warning("Plese fill the all fields !");
            }
        }
    };

    const ChangePassword = () => {
        if (_Id !== "" && oldPassword !== "" && newPassword !== "" && conformpassword !== "") {
            if (newPassword === conformpassword) {
                axios.put(`http://localhost:3000/user/changePassword/${_Id}`, { oldPassword, newPassword })
                    .then(response => {
                        if (response.status === 200) {
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: "Password Successfully Changed",
                                showConfirmButton: false,
                                timer: 1500
                            });

                        } else {
                            Swal.fire({
                                position: "top-center",
                                icon: "info",
                                title: "Old Password Dos't Match ",
                                showConfirmButton: false,
                                timer: 1500
                            });

                        }
                    }).catch(err => {
                        console.log(err);
                        toast.error("Old Password Dos't Match....")
                    })
            } else {
                Swal.fire({
                    position: "top-center",
                    icon: "warning",
                    title: "confirm both password are same !",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } else {
            Swal.fire({
                position: "top-center",
                icon: "warning",
                title: "Please fill the all fields !",
                showConfirmButton: false,
                timer: 1500
            });

        }

    };

    // const Name = document.getElementById('name');
    // const Image = document.getElementById('image');
    // const Email = document.getElementById('email');
    // const ContactNumber = document.getElementById('contactNumber');
    // const State = document.getElementById('state');
    // const City = document.getElementById('city');
    // const Address = document.getElementById('address');
    // const Pincode = document.getElementById('pincode');
    // const [userData, setuserData] = useState([]);
    // const [userData2, setuserData2] = useState([]);
    // let _Id = localStorage.getItem('userId');



    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        organization: '',
        designation: '',
        mobile: '',
        additionalInfo: '',
        address: '',
        dateOfBirth: '',
    });

    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);
        }

        // const storedFormData = localStorage.getItem('formData');
        // if (storedFormData) {
        //     setFormData(JSON.parse(storedFormData));
        // }
    }, []);

    // useEffect(() => {
    //     localStorage.setItem('formData', JSON.stringify(formData));
    // }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userId) {
            Swal.fire('Error', 'User not logged in', 'error');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/professional/create', {
                userId,
                ...formData,
            });

            const professionalId = response.data.data.professionalId;
            localStorage.setItem('professionalId', professionalId);
            console.log("professionalId: ", professionalId);
            Swal.fire('Success', 'Profile created successfully', 'success');
            navigate('/ProfessionalProfile', { state: { professionalId } });
        } catch (error) {
            console.log(error);
            const errorMessage = error.response?.data?.message || 'Something went wrong';
            Swal.fire('Error', errorMessage, 'error');
        }
    };
    //  professionalId = localStorage.getItem('professionalId');
    const professionalId = localStorage.getItem('professionalId');


    const ProfileInformation = () => {
        // setFormData(true)
        axios.post("http://localhost:3000/professional/viewByUserId", { userId:_Id, professionalId })
            .then(response => {
                console.log(response.data)
                setFormData(response.data.data);
            }).catch(err => {
                console.log(err);
            })
    };
    useEffect(() => {
        ProfileInformation();
    }, [localStorage.getItem('userId')], [localStorage.getItem('professionalId')]);



    const [visibleDiv, setVisibleDiv] = useState(1);
    const handleButtonClick = (divId) => {
        setVisibleDiv(divId);
    };

    return <>
        <div className="container-fluid py-4" style={{ background: "#292e39" }}>
            <div className="main-body">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="position-relative d-flex flex-column bg-white border border-0 rounded mb-1 card" style={{ minWidth: "0", wordWrap: "break-word", backgroundClip: "border-box", boxShadow: "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)" }}>
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle bg-light p-1" style={{ border: "2px solid #292e39" }} width="110" />
                                    <div className="mt-3">
                                        <h4>{userData.name}</h4>
                                        <p className="text-secondary mb-1">{userData.contactNumber}</p>
                                        <p className="text-muted font-size-sm">{userData.email}</p>
                                        <button className="btn btn-dark">Message</button>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <ul className="list-group list-group-flush rounded-2">
                                    <li role='button' style={{ background: "#292e39" }} className="rounded-2 text-white list-group-item  cursor-pointer d-flex justify-content-between align-items-center flex-wrap" onClick={() => { handleButtonClick(1); UserInformation(); }}>
                                        <h6 className="m-0 p-2 rounded-2  h-100 w-100">Personal Information</h6>
                                    </li>
                                    <hr className='m-0 border-white border' />
                                    <li role='button' style={{ background: "#292e39" }} className="rounded-2 text-white list-group-item  cursor-pointer d-flex justify-content-between align-items-center flex-wrap" onClick={() => { handleButtonClick(2); UserInformation(); }}>
                                        <h6 className="m-0 p-2 rounded-2  h-100 w-100">My Address</h6>
                                    </li>
                                    <hr className='m-0 border-white border' />
                                    <li role='button' style={{ background: "#292e39" }} className="rounded-2 text-white list-group-item  cursor-pointer d-flex justify-content-between align-items-center flex-wrap" onClick={() => { handleButtonClick(3); }}>
                                        <h6 className="m-0 p-2 rounded-2  h-100 w-100">Change Password</h6>
                                    </li>
                                    <hr className='m-0 border-white border' />
                                    <li role='button' style={{ background: "#292e39" }} className="rounded-2 text-white list-group-item  cursor-pointer d-flex justify-content-between align-items-center flex-wrap" onClick={() => { handleButtonClick(4); }}>
                                        <h6 className="m-0 p-2 rounded-2  h-100 w-100">Personal Profile</h6>
                                    </li>
                                    <hr className='m-0 border-white border' />
                                    <li role='button' style={{ background: "#292e39" }} className="rounded-2 text-white list-group-item  cursor-pointer d-flex justify-content-between align-items-center flex-wrap" onClick={() => { handleButtonClick(5); }}>
                                        <h6 className="m-0 p-2 rounded-2  h-100 w-100">Education Profile</h6>
                                    </li>
                                    <hr className='m-0 border-white border' />
                                    {/* <li
                                        role='button'
                                        style={{ background: "#292e39" }}
                                        className="rounded-2 text-white list-group-item cursor-pointer d-flex justify-content-between align-items-center flex-wrap"
                                        onClick={() => handleButtonClick(
                                            formData.name !== "" &&
                                            formData.email !== "" &&
                                            formData.address !== "" &&
                                            formData.additionalInfo !== "" &&
                                            formData.dateOfBirth !== "" &&
                                            formData.mobile !== "" &&
                                            formData.organization !== "" &&
                                            formData.designation !== "" ? 7 : 12
                                        )}
                                    >
                                        <h6 className="m-0 p-2 rounded-2 h-100 w-100">Professional profile</h6>
                                    </li> */}
                                    {/* {(formData.name !== "" &&
                                        formData.email !== "" &&
                                        formData.address !== "" &&
                                        formData.additionalInfo !== "" &&
                                        formData.dateOfBirth !== "" &&
                                        formData.mobile !== "" &&
                                        formData.organization !== "" &&
                                        formData.designation !== "")?(console.log("card")):(console.log("fromhn",formData.name))} */}
                                    <li
                                        role='button'
                                        style={{ background: "#292e39" }}
                                        className="rounded-2 text-white list-group-item cursor-pointer d-flex justify-content-between align-items-center flex-wrap"
                                        onClick={() => handleButtonClick(
                                            formData.name !== "" &&
                                                formData.email !== "" &&
                                                formData.address !== "" &&
                                                formData.additionalInfo !== "" &&
                                                formData.dateOfBirth !== "" &&
                                                formData.mobile !== "" &&
                                                formData.organization !== "" &&
                                                formData.designation !== "" ? 7 : 12
                                        )}
                                    >
                                        <h6 className="m-0 p-2 rounded-2 h-100 w-100">Professional profile</h6>
                                    </li>


                                    < hr className='m-0 border-white border' />
                                    <li role='button' style={{ background: "#292e39" }} className="rounded-2 text-white list-group-item  cursor-pointer d-flex justify-content-between align-items-center flex-wrap" onClick={() => { handleButtonClick(9); }}>
                                        <h6 className="m-0 p-2 rounded-2  h-100 w-100">Medical Profile</h6>
                                    </li>
                                    <hr className='m-0 border-white border' />
                                    <li role='button' style={{ background: "#292e39" }} className="rounded-2 text-white list-group-item  cursor-pointer d-flex justify-content-between align-items-center flex-wrap" onClick={() => { handleButtonClick(11); }}>
                                        <h6 className="m-0 p-2 rounded-2  h-100 w-100" onClick={() => navigate("/editCart")}>Customized Profile</h6>
                                    </li>
                                    <hr className='m-0 border-white border' />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="position-relative d-flex flex-column bg-white border border-0 rounded mb-1 card" style={{ minWidth: "0", wordWrap: "break-word", backgroundClip: "border-box", boxShadow: "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)" }}>
                            {/* Personal Information ======================================================= */}
                            <div className="card-body pt-1" style={{ display: visibleDiv === 1 ? "block" : "none" }}>
                                <h4 className="mb-4 fw-bold text-center">Personal Information</h4>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Full Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6 " onChange={(event) => setname(event.target.value)} id='name' placeholder='Enter Full Name' disabled={disabledinput} value={userData2.name} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6 " onChange={(event) => setemail(event.target.value)} id='email' placeholder='Enter Email' disabled={disabledinput} value={userData2.email} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Mobile</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="number" className="form-control fs-6 " onChange={(event) => setcontactNumber(event.target.value)} id='contactNumber' placeholder='Enter Contact Number' disabled={disabledinput} value={userData2.contactNumber} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Date of Birth</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input
                                            type="date"
                                            className="form-control fs-6"
                                            id="dob"
                                            placeholder="Enter Date of Birth"
                                            disabled={disabledinput}
                                        />
                                    </div>

                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Gender</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary d-flex gap-3">
                                        <div className="form-check">
                                            <input className="form-check-input" onClick={(event) => setgender(event.target.value)} type="radio" name="exampleRadios" id="exampleRadios1" value="male" disabled={disabledinput} checked={(userData2.gender === "male")} />
                                            <label className="form-check-label" htmlFor="exampleRadios1">Male</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" onClick={(event) => setgender(event.target.value)} type="radio" name="exampleRadios" id="exampleRadios2" value="female" disabled={disabledinput} checked={(userData2.gender === "female")} />
                                            <label className="form-check-label" htmlFor="exampleRadios2">Female</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" onClick={(event) => setgender(event.target.value)} type="radio" name="exampleRadios" id="exampleRadios3" value="other" disabled={disabledinput} />
                                            <label className="form-check-label" htmlFor="exampleRadios3">Other</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3"></div>
                                    <div className="col-sm-9 text-secondary gap-2 d-flex">
                                        <button className="btn btn-dark p-2" style={{ display: (buttondisplyblock) ? "block" : "none" }} onClick={() => { setuserData2(""); setdisabledinput(0); setbuttondisplyblock(false); Name.value = userData2.name; setname(userData2.name); Email.value = userData2.email; setemail(userData2.email); ContactNumber.value = userData2.contactNumber; setcontactNumber(userData2.contactNumber); setgender(userData2.gender); }}>Update Profile</button>
                                        <button className="btn btn-dark p-2" style={{ display: (buttondisplyblock) ? "none" : "block" }} onClick={() => { PersonalInformation(); }}>Save Changes</button>
                                    </div>
                                </div>
                            </div>
                            {/* My Address ============================================================ */}
                            <div className="card-body pt-1" style={{ display: visibleDiv === 2 ? "block" : "none" }}>
                                <h4 className="mb-4 fw-bold text-center">My Address</h4>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">State</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6 " onChange={(event) => setstate(event.target.value)} id='state' placeholder='Enter State' disabled={disabledinput} value={userData2.state} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">City</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6 " onChange={(event) => setcity(event.target.value)} id='city' placeholder='Enter City' disabled={disabledinput} value={userData2.city} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Address</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6 " onChange={(event) => setaddress(event.target.value)} id='address' placeholder='Enter Address' disabled={disabledinput} value={userData2.address} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Pincode</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="number" className="form-control fs-6 " onChange={(event) => setpincode(event.target.value)} id='pincode' placeholder='Enter Pincode' disabled={disabledinput} value={userData2.pincode} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3"></div>
                                    <div className="col-sm-9 text-secondary gap-2 d-flex">
                                        <button className="btn btn-dark p-1 py-2" style={{ display: (buttondisplyblock2) ? "block" : "none" }} onClick={() => { setuserData2(""); setdisabledinput(0); setbuttondisplyblock2(false); State.value = userData2.state; setstate(userData2.state); City.value = userData2.city; setcity(userData2.city); Address.value = userData2.address; setaddress(userData2.address); Pincode.value = userData2.pincode; setpincode(userData2.pincode); }}>Update Address</button>
                                        <button className="btn btn-dark p-1 py-2" style={{ display: (buttondisplyblock2) ? "none" : "block" }} onClick={() => { MyAddress(); }}>Save Changes</button>
                                    </div>
                                </div>
                            </div>
                            {/* Change Password========================================= */}
                            <div className="card-body pt-1" style={{ display: visibleDiv === 3 ? "block" : "none" }}>
                                <h4 className="mb-4 fw-bold text-center">Change Password</h4>
                                <div className="mb-3 row">
                                    <div className="col-sm-4 mb-2">
                                        <h6 className="mb-0">Recent Password</h6>
                                    </div>
                                    <div className="col-sm-8 text-secondary">
                                        <input type="text" className="form-control fs-6 " onChange={(event) => setoldpassword(event.target.value)} placeholder='Enter Your Recent Password' />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-sm-4 mb-2">
                                        <h6 className="mb-0">New Password</h6>
                                    </div>
                                    <div className="col-sm-8 text-secondary">
                                        <input type="text" className="form-control fs-6 " onChange={(event) => setnewpassword(event.target.value)} placeholder='Enter New Password' />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-sm-4 mb-2">
                                        <h6 className="mb-0">Confirm Password</h6>
                                    </div>
                                    <div className="col-sm-8 text-secondary">
                                        <input type="text" className="form-control fs-6 " onChange={(event) => setconformpassword(event.target.value)} placeholder='Enter Confirm Password' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4"></div>
                                    <div className="col-sm-8 text-secondary">
                                        <button className="btn btn-dark p-2" onClick={() => ChangePassword()}>Save Changes</button>
                                    </div>
                                </div>
                            </div>
                            {/* Personal Profile ========================================= */}
                            <div className="card-body pt-1 justify-content-center flex-column align-items-center" style={{ display: visibleDiv === 4 ? "flex" : "none" }}>
                                <h4 className="mb-4 fw-bold text-center">Personal Profile</h4>
                                <PersonalProfile />
                            </div>
                            {/* Education Profile ========================================= */}
                            <div className="card-body pt-1 justify-content-center flex-column align-items-center" style={{ display: visibleDiv === 5 ? "flex" : "none" }}>
                                <h4 className="mb-4 fw-bold text-center">Education Profile</h4>
                                <EducationProfile />
                                <button className="btn btn-dark mt-3 p-1 py-2" onClick={() => { handleButtonClick(6); }} >Update Details</button>
                            </div>
                            {/* Edit Education Profile ============================================================ */}
                            <div className="card-body pt-1" style={{ display: visibleDiv === 6 ? "block" : "none" }}>
                                <h4 className="mb-4 fw-bold text-center">Edit Education Details</h4>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">City</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6 " placeholder='Enter Address' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Address</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6 " placeholder='Enter Address' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">UG Institute Name:</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6 " placeholder='Enter Institute Name' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Graduation:</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6 " placeholder='Affileted' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">UG CGPA:</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6 " placeholder='Enter Corse' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Passout Year:</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6 " placeholder='Enter Branch' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">PG Institute Name:</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6 " placeholder='Enter Institute Name' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Post Graduation:</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6 " placeholder='Affileted' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">PG CGPA:</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6 " placeholder='Enter Corse' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Passout Year:</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6 " placeholder='Enter Branch' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Additional Information:</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <textarea type="text" className="form-control fs-6 " placeholder='Enter Branch' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3"></div>
                                    <div className="col-sm-9 text-secondary gap-2 d-flex">
                                        <button className="btn btn-dark p-1 py-2" onClick={() => { handleButtonClick(5); }} >--- Back ---</button>
                                        <button className="btn btn-dark p-1 py-2" >Save Changes</button>
                                    </div>
                                </div>
                            </div>
                            {/* Professional Profile ========================================= */}
                            <div className="card-body pt-1 justify-content-center flex-column align-items-center" style={{ display: visibleDiv === 7 ? "flex" : "none" }}>
                                <h4 className="mb-4 fw-bold text-center">Professional Profile</h4>
                                <ProfessionalProfile />
                            </div>
                            {/* Edit Professional Profile ============================================================ */}
                            <div className="card-body pt-1" style={{ display: visibleDiv === 8 ? "block" : "none" }}>
                                <h4 className="mb-4 fw-bold text-center">Edit Professional Details</h4>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Organisation:</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6 " placeholder='Enter Organisation Name' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Designation:</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6 " placeholder='Enter Designation' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Mobile:</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6 " placeholder='Enter Contact' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Professional Address:</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6 " placeholder='Enter Address' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3"></div>
                                    <div className="col-sm-9 text-secondary gap-2 d-flex">
                                        <button className="btn btn-dark p-1 py-2" onClick={() => { handleButtonClick(7); }} >--- Back ---</button>
                                        <button className="btn btn-dark p-1 py-2" >Save Changes</button>
                                    </div>
                                </div>
                            </div>
                            {/*  Professional Profile form  ============================================================ */}
                            <div className="card-body pt-1" style={{ display: visibleDiv === 12 ? "block" : "none" }}>
                                <form onSubmit={handleSubmit}>
                                    <div className="row mb-3">
                                        <div className="col-sm-3 mb-2">
                                            <h6 className="mb-0">Full Name:</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input
                                                type="text"
                                                className="form-control fs-6"
                                                placeholder="Enter Full Name"
                                                name="fullName"
                                                value={formData.fullName}
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
                                                className="form-control fs-6"
                                                placeholder="Enter Date Of Birth"
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
                                            <button type="submit" className="btn btn-dark p-1 py-2" onClick={() => { handleButtonClick(7); }}>
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* Medical Profile ========================================= */}
                            <div className="card-body pt-1 justify-content-center flex-column align-items-center" style={{ display: visibleDiv === 9 ? "flex" : "none" }}>
                                <h4 className="mb-4 fw-bold text-center">Medical Profile</h4>
                                <MedicalProfile />
                                <button className="btn btn-dark mt-3 p-1 py-2" onClick={() => { handleButtonClick(10); }} >Update Details</button>
                            </div>
                            {/* Edit Medical Profile ============================================================ */}
                            <div className="card-body pt-1" style={{ display: visibleDiv === 10 ? "block" : "none" }}>
                                <h4 className="mb-4 fw-bold text-center">Edit Medical Details</h4>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Blood Group</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6 " placeholder='Enter Blood Group' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Height</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6 " placeholder='Enter Height' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Weight</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6 " placeholder='Enter Weight' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Medical History</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6 " placeholder='Medical History' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3"></div>
                                    <div className="col-sm-9 text-secondary gap-2 d-flex">
                                        <button className="btn btn-dark p-1 py-2" onClick={() => { handleButtonClick(9); }} >--- Back ---</button>
                                        <button className="btn btn-dark p-1 py-2" >Save Changes</button>
                                    </div>
                                </div>
                            </div>
                            {/* Customized Profile ========================================= */}
                            <div className="card-body pt-1 justify-content-center flex-column align-items-center" style={{ display: visibleDiv === 11 ? "flex" : "none" }}>
                                <h4 className="mb-4 fw-bold text-center">Customized Profile</h4>
                                <CustomizedProfile />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        <ToastContainer />
    </>
}