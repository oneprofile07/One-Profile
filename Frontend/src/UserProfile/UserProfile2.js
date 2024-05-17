export default function UserProfile() {
    return <>
        <div className="container-fluid py-4 bg-primary">
            <div className="main-body">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="position-relative d-flex flex-column  border border-0 rounded mb-1 card" style={{ minWidth: "0", wordWrap: "break-word", backgroundClip: "border-box", boxShadow: "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)" }}>
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle " width="110" />
                                    <div className="mt-3">
                                        <h4>Raj Thakur</h4>
                                        <p className="text-secondary mb-1">8827142011</p>
                                        <p className="text-muted font-size-sm">rajthakur8827142011@gmail.com</p>
                                        <button className="btn btn-primary ">Message</button>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <ul className="list-group list-group-flush rounded-2">
                                    <li role='button' className="bg-primary rounded-2 list-group-item  cursor-pointer d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="m-0 p-2 rounded-2 h-100 w-100">Personal Information</h6>
                                    </li>
                                    <hr className='m-0 border-white border' />
                                    <li role='button' className="bg-primary rounded-2 list-group-item  cursor-pointer d-flex justify-content-between align-items-center flex-wrap" >
                                        <h6 className="m-0 p-2 rounded-2 h-100 w-100">My Address</h6>
                                    </li>
                                    <hr className='m-0 border-white border' />
                                    <li role='button' className="bg-primary rounded-2 list-group-item  cursor-pointer d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="m-0 p-2 rounded-2 h-100 w-100">Change Password</h6>
                                    </li>
                                    <hr className='m-0 border-white border' />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="position-relative d-flex flex-column border-0 rounded mb-1 card" style={{ minWidth: "0", wordWrap: "break-word", backgroundClip: "border-box", boxShadow: "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)" }}>
                            {/* Personal Information ======================================================= */}
                            <div className="card-body">
                                <h4 className="mb-4 fw-bold text-center">Personal Information</h4>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Full Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6" id='name' placeholder='Enter Full Name' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6" placeholder='Enter Email' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Mobile</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="number" className="form-control fs-6" id='contactNumber' placeholder='Enter Contact Number' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Gender</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary d-flex gap-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="male" />
                                            <label className="form-check-label" htmlFor="exampleRadios1">Male</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="female" />
                                            <label className="form-check-label" htmlFor="exampleRadios2">Female</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="other" />
                                            <label className="form-check-label" htmlFor="exampleRadios3">Other</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3"></div>
                                    <div className="col-sm-9 text-secondary gap-2 d-flex">
                                        <button className="btn btn-primary  p-2" >Update Profile</button>
                                        <button className="btn btn-primary  p-2" >Save Changes</button>
                                    </div>
                                </div>
                            </div>
                            {/* My Address ============================================================ */}
                            <div className="card-body border" >
                                <h4 className="mb-4 fw-bold text-center">My Address</h4>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">State</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6" placeholder='Enter State' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">City</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6" placeholder='Enter City' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Address</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control fs-6" id='address' placeholder='Enter Address' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3 mb-2">
                                        <h6 className="mb-0">Pincode</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="number" className="form-control fs-6" id='pincode' placeholder='Enter Pincode' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3"></div>
                                    <div className="col-sm-9 text-secondary gap-2 d-flex">
                                        <button className="btn btn-primary  p-1 py-2" >Update Address</button>
                                        <button className="btn btn-primary  p-1 py-2" >Save Changes</button>
                                    </div>
                                </div>
                            </div>
                            {/* Change Password========================================= */}
                            <div className="card-body">
                                <h4 className="mb-4 fw-bold text-center">Change Password</h4>
                                <div className="mb-3 row">
                                    <div className="col-sm-4 mb-2">
                                        <h6 className="mb-0">Recent Password</h6>
                                    </div>
                                    <div className="col-sm-8 text-secondary">
                                        <input type="text" className="form-control fs-6" placeholder='Enter Your Recent Password' />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-sm-4 mb-2">
                                        <h6 className="mb-0">New Password</h6>
                                    </div>
                                    <div className="col-sm-8 text-secondary">
                                        <input type="text" className="form-control fs-6" placeholder='Enter New Password' />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-sm-4 mb-2">
                                        <h6 className="mb-0">Confirm Password</h6>
                                    </div>
                                    <div className="col-sm-8 text-secondary">
                                        <input type="text" className="form-control fs-6" placeholder='Enter Confirm Password' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4"></div>
                                    <div className="col-sm-8 text-secondary">
                                        <button className="btn btn-primary  p-2">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>
}