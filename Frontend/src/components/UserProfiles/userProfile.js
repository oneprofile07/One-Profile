import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
export default function UserProfile() {
    const Name = document.getElementById('name');
    const Image = document.getElementById('image');
    const Email = document.getElementById('email');
    const ContactNumber = document.getElementById('contactNumber');
    const State = document.getElementById('state');
    const City = document.getElementById('city');
    const Address = document.getElementById('address');
    const Pincode = document.getElementById('pincode');
    const [userData, setuserData] = useState([]);
    const [userData2, setuserData2] = useState([]);
    // let id = localStorage.getItem('userId');
    let id = 1;
    const UserInformation = () => {
        setbuttondisplyblock(true)
        setbuttondisplyblock2(true)
        axios.post("http://localhost:3005/user/viewuserbyid", { id })
            .then(response => {
                setuserData(response.data.data);
                setuserData2(response.data.data);
                setdisabledinput(1);
            }).catch(err => {
                console.log(err);
            })
    };
    useEffect(() => {
        UserInformation();
        // }, [localStorage.getItem('userId')]);
    }, [1]);

    const [disabledinput, setdisabledinput] = useState(1);
    const [buttondisplyblock, setbuttondisplyblock] = useState(true);
    const [buttondisplyblock2, setbuttondisplyblock2] = useState(true);
    const [name, setname] = useState("");
    const [image, setimage] = useState("");
    const [email, setemail] = useState("");
    const [contactNumber, setcontactNumber] = useState("");
    const [gender, setgender] = useState("");
    const [state, setstate] = useState("");
    const [city, setcity] = useState("");
    const [address, setaddress] = useState("");
    const [pincode, setpincode] = useState("");
    const [oldpassword, setoldpassword] = useState("");
    const [newpassword, setnewpassword] = useState("");
    const [conformpassword, setconformpassword] = useState("");

    const PersonalInformation = () => {
        if (id !== "" && name !== "" && email !== "" && contactNumber !== "" && gender !== "") {
            if (userData2 !== "") {
                toast.info("every thing is uptodate")
            } axios.put("http://localhost:3005/user/updateProfile", { id, name, email, contactNumber, gender })
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
        if (id !== "" && state !== "" && city !== "" && address !== "" && pincode !== "") {
            if (userData2 !== "") {
                toast.info("every thing is uptodate")
            } axios.put("http://localhost:3005/user/updateAddress", { id, state, city, address, pincode })
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
        if (id !== "" && oldpassword !== "" && newpassword !== "" && conformpassword !== "") {
            if (newpassword === conformpassword) {
                axios.put("http://localhost:3005/user/updatepassword", { id, oldpassword, newpassword })
                    .then(response => {
                        if (response.status === 200) {
                            toast.success("Password Successfuly Chenged....")
                        } else {
                            toast.info("Old Password Dos't Match....")
                        }
                    }).catch(err => {
                        console.log(err);
                        toast.error("Old Password Dos't Match....")
                    })
            } else {
                toast.warning("confirm both password are same !");
            }
        } else {
            toast.warning("Plese fill the all fields !");
        }

    };

    const [visibleDiv, setVisibleDiv] = useState(1);
    const handleButtonClick = (divId) => {
        setVisibleDiv(divId);
    };
    // const templates = ["./Images/1.png", "./Images/2.png", "./Images/3.png", "./Images/4.png", "./Images/5.png", "./Images/6.png", "./Images/7.png", "./Images/8.png", "./Images/9.png", "./Images/10.png", "./Images/11.png", "./Images/12.png", "./Images/13.png", "./Images/14.png", "./Images/15.png", "./Images/16.png", "./Images/17.png", "./Images/18.png", "./Images/19.png",]
    const templates = [{ img1: "./Images/21.png", img2: "./Images/21.png", textcolor: "black" }, { img1: "./Images/15.png", img2: "./Images/15.png", textcolor: "black" }, { img1: "./Images/1.png", img2: "./Images/1.png", textcolor: "white" }, { img1: "./Images/2.png", img2: "./Images/3.png", textcolor: "black" }, { img1: "./Images/4.png", img2: "./Images/5.png", textcolor: "black" }, { img1: "./Images/6.png", img2: "./Images/21.png", textcolor: "black" }, { img1: "./Images/7.png", img2: "./Images/21.png", textcolor: "black" }, { img1: "./Images/8.png", img2: "./Images/21.png", textcolor: "black" }, { img1: "./Images/9.png", img2: "./Images/15.png", textcolor: "black" }, { img1: "./Images/10.png", img2: "./Images/22.png", textcolor: "black" }, { img1: "./Images/11.png", img2: "./Images/20.png", textcolor: "black" }, { img1: "./Images/12.png", img2: "./Images/12.png", textcolor: "white" }, { img1: "./Images/13.png", img2: "./Images/13.png", textcolor: "white" }, { img1: "./Images/14.png", img2: "./Images/15.png", textcolor: "black" }, { img1: "./Images/16.png", img2: "./Images/17.png", textcolor: "black" }, { img1: "./Images/18.png", img2: "./Images/18.png", textcolor: "white" }, { img1: "./Images/19.png", img2: "./Images/19.png", textcolor: "white" }];
    const [personalProfileCard, setpersonalProfileCard] = useState([{ img1: "./Images/16.png", img2: "./Images/17.png", textcolor: "black" }]);
    const [educationProfileCard, seteducationProfileCard] = useState([{ img1: "./Images/1.png", img2: "./Images/1.png", textcolor: "white" }]);
    const [professionalProfileCard, setprofessionalProfileCard] = useState([{ img1: "./Images/12.png", img2: "./Images/12.png", textcolor: "white" }]);
    const [medicalProfileCard, setmedicalProfileCard] = useState([{ img1: "./Images/4.png", img2: "./Images/5.png", textcolor: "black" }]);

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
                                    <li role='button' style={{ background: "#292e39" }} className="rounded-2 text-white list-group-item  cursor-pointer d-flex justify-content-between align-items-center flex-wrap" >
                                        <select className="form-select m-0 p-2 rounded-2 bg-transparent text-white border-0 h-100 w-100" aria-label="Default select example" onChange={(event) => { handleButtonClick(event.target.value * 1); }} >
                                            <option className='text-light bg-dark' value="Profiles">Profiles</option>
                                            <option className='text-light bg-dark' value="4">Personal Profile</option>
                                            <option className='text-light bg-dark' value="5">Education Profile</option>
                                            <option className='text-light bg-dark' value="6">Professional profile</option>
                                            <option className='text-light bg-dark' value="7">Medical Profile</option>
                                        </select>
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
                                <div className='d-flex flex-wrap justify-content-evenly gap-4'>
                                    <div className="card personalcard1-img d-flex align-items-center justify-content-center flex-column text-center" style={{ width: "18rem", height: "500px", color: `${personalProfileCard[0].textcolor}`, background: `url(${personalProfileCard[0].img1}) center/cover no-repeat` }}>
                                        <div className="card-body p-3 pt-4 p-0 m-0">
                                            <img src="https://media.licdn.com/dms/image/C5103AQHWU6LKrww52A/profile-displayphoto-shrink_200_200/0/1516948926786?e=2147483647&v=beta&t=5Z7Gsz_fw-wQ-WixlcXT3_FT5lIKJoivkcIrttx6wQ4" className="rounded-circle bg-transparent m-0 p-0" width="45px" height="45px" alt="..." />
                                            <h5 className="card-title fs-6 m-0 p-0">Swami Vivekanand College</h5>
                                            <hr className='my-3' />
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="m-0 rounded-circle bg-light border border-3 border-secondary p-1 bg-light" width="140px" height="140px" alt="..." />
                                            <p className="card-text p-0 m-0">Raj Thakur</p>
                                            <p className="card-text p-0 m-0">8827142011</p>
                                            <p className="card-text p-0 m-0">rajthakur8827142011@gmail.com</p>
                                            <hr className='my-1' />
                                            <div className='d-flex justify-content-between'>
                                                <p className="text-secondary card-text p-0 m-0">Course :-</p>
                                                <p className="text-secondary card-text p-0 m-0">B.Tech</p>
                                            </div>
                                            <div className='d-flex justify-content-between mt-2'>
                                                <p className="text-secondary card-text p-0 m-0">Branch :-</p>
                                                <p className="text-secondary card-text p-0 m-0">IT</p>
                                            </div>
                                            <div className='d-flex justify-content-between mt-2'>
                                                <p className="text-secondary card-text p-0 m-0">Roll no :-</p>
                                                <p className="text-secondary card-text p-0 m-0">0822IT211041</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card personalcard2-img d-flex align-items-center justify-content-center flex-column text-center" style={{ width: "18rem", height: "500px", color: `${personalProfileCard[0].textcolor}`, background: `url(${personalProfileCard[0].img2}) center/cover no-repeat` }}>
                                        <div className="card-body p-4 py-5 p-0 m-0">
                                            <div className='d-flex justify-content-between'>
                                                <p className="card-text p-0 m-0">Address:-</p>
                                                <p className="card-text text-secondary text-end p-0 m-0">Sant Nagar, Near by gurudwara, khandwa Naka, Indore</p>
                                            </div>
                                            <div className='d-flex justify-content-between mt-2'>
                                                <p className="card-text p-0 m-0">CGPA :-</p>
                                                <p className="card-text text-secondary p-0 m-0">7.24 CGPA</p>
                                            </div>
                                            <div className='d-flex justify-content-between mt-2'>
                                                <p className="card-text p-0 m-0">Passing :-</p>
                                                <p className="card-text text-secondary p-0 m-0">June 2025</p>
                                            </div>
                                            <div className='d-flex justify-content-between mt-2'>
                                                <p className="card-text p-0 m-0">Date of Birth :-</p>
                                                <p className="card-text text-secondary p-0 m-0">29 Oct 2002</p>
                                            </div>
                                            <hr />
                                            <p className="card-text text-secondary p-0 m-0">khandwa Road, Near By Toll Naka, Indore (Madhya Predesh)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="container text-center d-flex gap-3 flex-nowrap overflow-auto bg-secondary overflow-x-scroll mt-3 p-2" style={{ scrollbarWidth: "none", boxShadow: "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)" }}>
                                    {templates.map((img, index) => <div key={index} className="card shadow border border-dark" id="view_hover" style={{ flex: "0 0 auto" }}>
                                        <img src={img.img1} onClick={() => setpersonalProfileCard([{ img1: img.img1, img2: img.img2, textcolor: img.textcolor }])} className="card-img" style={{ width: "50px", cursor: "pointer" }} height={90} alt="..." />
                                    </div>)}
                                </div>
                            </div>
                            {/* Education Profile ========================================= */}
                            <div className="card-body pt-1 justify-content-center flex-column align-items-center" style={{ display: visibleDiv === 5 ? "flex" : "none" }}>
                                <h4 className="mb-4 fw-bold text-center">Education Profile</h4>
                                <div className='d-flex flex-wrap justify-content-evenly gap-4'>
                                    <div className="card personalcard1-img d-flex align-items-center justify-content-center flex-column text-center" style={{ width: "18rem", height: "500px", color: `${educationProfileCard[0].textcolor}`, background: `url(${educationProfileCard[0].img1}) center/cover no-repeat` }}>
                                        <div className="card-body p-3 pt-4 p-0 m-0">
                                            <img src="https://media.licdn.com/dms/image/C5103AQHWU6LKrww52A/profile-displayphoto-shrink_200_200/0/1516948926786?e=2147483647&v=beta&t=5Z7Gsz_fw-wQ-WixlcXT3_FT5lIKJoivkcIrttx6wQ4" className="rounded-circle bg-transparent m-0 p-0" width="45px" height="45px" alt="..." />
                                            <h5 className="card-title fs-6 m-0 p-0">Swami Vivekanand College</h5>
                                            <hr className='my-3' />
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="m-0 rounded-circle bg-light border border-3 border-secondary p-1 bg-light" width="140px" height="140px" alt="..." />
                                            <p className="card-text p-0 m-0">Raj Thakur</p>
                                            <p className="card-text p-0 m-0">8827142011</p>
                                            <p className="card-text p-0 m-0">rajthakur8827142011@gmail.com</p>
                                            <hr className='my-1' />
                                            <div className='d-flex justify-content-between'>
                                                <p className="text-secondary card-text p-0 m-0">Course :-</p>
                                                <p className="text-secondary card-text p-0 m-0">B.Tech</p>
                                            </div>
                                            <div className='d-flex justify-content-between mt-2'>
                                                <p className="text-secondary card-text p-0 m-0">Branch :-</p>
                                                <p className="text-secondary card-text p-0 m-0">IT</p>
                                            </div>
                                            <div className='d-flex justify-content-between mt-2'>
                                                <p className="text-secondary card-text p-0 m-0">Roll no :-</p>
                                                <p className="text-secondary card-text p-0 m-0">0822IT211041</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card personalcard2-img d-flex align-items-center justify-content-center flex-column text-center" style={{ width: "18rem", height: "500px", color: `${educationProfileCard[0].textcolor}`, background: `url(${educationProfileCard[0].img2}) center/cover no-repeat ` }}>
                                        <div className="card-body p-4 py-5 p-0 m-0">
                                            <div className='d-flex justify-content-between'>
                                                <p className="card-text p-0 m-0">Address:-</p>
                                                <p className="card-text text-secondary text-end p-0 m-0">Sant Nagar, Near by gurudwara, khandwa Naka, Indore</p>
                                            </div>
                                            <div className='d-flex justify-content-between mt-2'>
                                                <p className="card-text p-0 m-0">CGPA :-</p>
                                                <p className="card-text text-secondary p-0 m-0">7.24 CGPA</p>
                                            </div>
                                            <div className='d-flex justify-content-between mt-2'>
                                                <p className="card-text p-0 m-0">Passing :-</p>
                                                <p className="card-text text-secondary p-0 m-0">June 2025</p>
                                            </div>
                                            <div className='d-flex justify-content-between mt-2'>
                                                <p className="card-text p-0 m-0">Date of Birth :-</p>
                                                <p className="card-text text-secondary p-0 m-0">29 Oct 2002</p>
                                            </div>
                                            <hr />
                                            <p className="card-text text-secondary p-0 m-0">khandwa Road, Near By Toll Naka, Indore (Madhya Predesh)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="container text-center d-flex gap-3 flex-nowrap overflow-auto bg-secondary overflow-x-scroll mt-3 p-2" style={{ scrollbarWidth: "none", boxShadow: "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)" }}>
                                    {templates.map((img, index) => <div key={index} className="card shadow border border-dark" id="view_hover" style={{ flex: "0 0 auto" }}>
                                        <img src={img.img1} onClick={() => seteducationProfileCard([{ img1: img.img1, img2: img.img2, textcolor: img.textcolor }])} className="card-img" style={{ width: "50px", cursor: "pointer" }} height={90} alt="..." />
                                    </div>)}
                                </div>
                            </div>
                            {/* Professional Profile ========================================= */}
                            <div className="card-body pt-1 justify-content-center flex-column align-items-center" style={{ display: visibleDiv === 6 ? "flex" : "none" }}>
                                <h4 className="mb-4 fw-bold text-center">Professional Profile</h4>
                                <div className='d-flex flex-wrap justify-content-evenly gap-4'>
                                    <div className="card personalcard1-img d-flex align-items-center justify-content-center flex-column text-center" style={{ width: "18rem", height: "500px", color: `${professionalProfileCard[0].textcolor}`, background: `url(${professionalProfileCard[0].img1}) center/cover no-repeat ` }}>
                                        <div className="card-body p-4 pt-5 mt-3 p-0 m-0">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="m-0 rounded-circle bg-light border border-3 border-secondary p-1 bg-light" width="120px" height="120px" alt="..." />
                                            <h5 className="card-title text-secondary fs-6 m-0 p-0">Project Manager</h5>
                                            <p className="card-text fs-3 p-0 mb-3">Raj Thakur</p>
                                            <p className="card-text text-secondary text-start p-0 m-0 my-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-plus-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5" />
                                            </svg> 8827142011</p>
                                            <p className="card-text text-secondary text-start p-0 m-0 my-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                                            </svg> rajthakur8827142011@gmail .com</p>
                                            <p className="card-text text-secondary text-start p-0 m-0 my-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                            </svg> khandwa Road, Near By Toll Naka, Indore (Madhya Predesh)</p>
                                        </div>
                                    </div>
                                    <div className="card personalcard2-img d-flex align-items-center justify-content-center flex-column text-center" style={{ width: "18rem", height: "500px", color: `${professionalProfileCard[0].textcolor}`, background: `url(${professionalProfileCard[0].img2}) center/cover no-repeat ` }}>
                                        <div className="card-body p-4 py-5 p-0 m-0">
                                            <div className='d-flex justify-content-between'>
                                                <p className="card-text p-0 m-0">Address:-</p>
                                                <p className="card-text text-secondary text-end p-0 m-0">Sant Nagar, Near by gurudwara, khandwa Naka, Indore</p>
                                            </div>
                                            <div className='d-flex justify-content-between mt-2'>
                                                <p className="card-text p-0 m-0">CGPA :-</p>
                                                <p className="card-text text-secondary p-0 m-0">7.24 CGPA</p>
                                            </div>
                                            <div className='d-flex justify-content-between mt-2'>
                                                <p className="card-text p-0 m-0">Passing :-</p>
                                                <p className="card-text text-secondary p-0 m-0">June 2025</p>
                                            </div>
                                            <div className='d-flex justify-content-between mt-2'>
                                                <p className="card-text p-0 m-0">Date of Birth :-</p>
                                                <p className="card-text text-secondary p-0 m-0">29 Oct 2002</p>
                                            </div>
                                            <hr />
                                            <p className="card-text text-secondary p-0 m-0">khandwa Road, Near By Toll Naka, Indore (Madhya Predesh)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="container text-center d-flex gap-3 flex-nowrap overflow-auto bg-secondary overflow-x-scroll mt-3 p-2" style={{ scrollbarWidth: "none", boxShadow: "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)" }}>
                                    {templates.map((img, index) => <div key={index} className="card shadow border border-dark" id="view_hover" style={{ flex: "0 0 auto" }}>
                                        <img src={img.img1} onClick={() => setprofessionalProfileCard([{ img1: img.img1, img2: img.img2, textcolor: img.textcolor }])} className="card-img" style={{ width: "50px", cursor: "pointer" }} height={90} alt="..." />
                                    </div>)}
                                </div>
                            </div>
                            {/* Medical Profile ========================================= */}
                            <div className="card-body pt-1 justify-content-center flex-column align-items-center" style={{ display: visibleDiv === 7 ? "flex" : "none" }}>
                                <h4 className="mb-4 fw-bold text-center">Medical Profile</h4>
                                <div className='d-flex flex-wrap justify-content-evenly gap-4'>
                                    <div className="card personalcard1-img d-flex align-items-center justify-content-center flex-column text-center" style={{ width: "18rem", height: "500px", color: `${medicalProfileCard[0].textcolor}`, background: `url(${medicalProfileCard[0].img1}) center/cover no-repeat` }}>
                                        <div className="card-body p-3 pt-4 p-0 m-0">
                                            <img src="https://media.licdn.com/dms/image/C5103AQHWU6LKrww52A/profile-displayphoto-shrink_200_200/0/1516948926786?e=2147483647&v=beta&t=5Z7Gsz_fw-wQ-WixlcXT3_FT5lIKJoivkcIrttx6wQ4" className="rounded-circle bg-transparent m-0 p-0" width="45px" height="45px" alt="..." />
                                            <h5 className="card-title fs-6 m-0 p-0">Swami Vivekanand College</h5>
                                            <hr className='my-3' />
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="m-0 rounded-circle bg-light border border-3 border-secondary p-1 bg-light" width="140px" height="140px" alt="..." />
                                            <p className="card-text p-0 m-0">Raj Thakur</p>
                                            <p className="card-text p-0 m-0">8827142011</p>
                                            <p className="card-text p-0 m-0">rajthakur8827142011@gmail.com</p>
                                            <hr className='my-1' />
                                            <div className='d-flex justify-content-between'>
                                                <p className="text-secondary card-text p-0 m-0">Course :-</p>
                                                <p className="text-secondary card-text p-0 m-0">B.Tech</p>
                                            </div>
                                            <div className='d-flex justify-content-between mt-2'>
                                                <p className="text-secondary card-text p-0 m-0">Branch :-</p>
                                                <p className="text-secondary card-text p-0 m-0">IT</p>
                                            </div>
                                            <div className='d-flex justify-content-between mt-2'>
                                                <p className="text-secondary card-text p-0 m-0">Roll no :-</p>
                                                <p className="text-secondary card-text p-0 m-0">0822IT211041</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card personalcard2-img d-flex align-items-center justify-content-center flex-column text-center" style={{ width: "18rem", height: "500px", color: ` ${medicalProfileCard[0].textcolor}`, background: `url(${medicalProfileCard[0].img2}) center/cover no-repeat` }}>
                                        <div className="card-body p-4 py-5 p-0 m-0">
                                            <div className='d-flex justify-content-between'>
                                                <p className="card-text p-0 m-0">Address:-</p>
                                                <p className="card-text text-secondary text-end p-0 m-0">Sant Nagar, Near by gurudwara, khandwa Naka, Indore</p>
                                            </div>
                                            <div className='d-flex justify-content-between mt-2'>
                                                <p className="card-text p-0 m-0">CGPA :-</p>
                                                <p className="card-text text-secondary p-0 m-0">7.24 CGPA</p>
                                            </div>
                                            <div className='d-flex justify-content-between mt-2'>
                                                <p className="card-text p-0 m-0">Passing :-</p>
                                                <p className="card-text text-secondary p-0 m-0">June 2025</p>
                                            </div>
                                            <div className='d-flex justify-content-between mt-2'>
                                                <p className="card-text p-0 m-0">Date of Birth :-</p>
                                                <p className="card-text text-secondary p-0 m-0">29 Oct 2002</p>
                                            </div>
                                            <hr />
                                            <p className="card-text text-secondary p-0 m-0">khandwa Road, Near By Toll Naka, Indore (Madhya Predesh)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="container text-center d-flex gap-3 flex-nowrap overflow-auto bg-secondary overflow-x-scroll mt-3 p-2" style={{ scrollbarWidth: "none", boxShadow: "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)" }}>
                                    {templates.map((img, index) => <div key={index} className="card shadow border border-dark" id="view_hover" style={{ flex: "0 0 auto" }}>
                                        <img src={img.img1} onClick={() => setmedicalProfileCard([{ img1: img.img1, img2: img.img2, textcolor: img.textcolor }])} className="card-img" style={{ width: "50px", cursor: "pointer" }} height={90} alt="..." />
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        <ToastContainer />
    </>
}