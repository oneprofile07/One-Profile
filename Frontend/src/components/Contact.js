import React from 'react';
import './contact.css'
import { FaLink } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
export default function Contact() {
    const statesOfIndia = [
        { name: 'Andhra Pradesh' },
        { name: 'Arunachal Pradesh' },
        { name: 'Assam' },
        { name: 'Bihar' },
        { name: 'Chhattisgarh' },
        { name: 'Goa' },
        { name: 'Gujarat' },
        { name: 'Haryana' },
        { name: 'Himachal Pradesh' },
        { name: 'Jharkhand' },
        { name: 'Karnataka' },
        { name: 'Kerala' },
        { name: 'Madhya Pradesh' },
        { name: 'Maharashtra' },
        { name: 'Manipur' },
        { name: 'Meghalaya' },
        { name: 'Mizoram' },
        { name: 'Nagaland' },
        { name: 'Odisha' },
        { name: 'Punjab' },
        { name: 'Rajasthan' },
        { name: 'Sikkim' },
        { name: 'Tamil Nadu' },
        { name: 'Telangana' },
        { name: 'Tripura' },
        { name: 'Uttar Pradesh' },
        { name: 'Uttarakhand' },
        { name: 'West Bengal' },
        { name: 'Andaman and Nicobar Islands' },
        { name: 'Chandigarh' },
        { name: 'Dadra and Nagar Haveli and Daman and Diu' },
        { name: 'Lakshadweep' },
        { name: 'Delhi' },
        { name: 'Puducherry' }
    ];

    return (
        <>
            <main className='p-5 mt-5' id='contact'>
                <h2 className='container text-center'>Contact <span className='text-primary'> Us</span></h2>
                <div className='container w-100 justify-content-center d-flex align-content-center'>
                    <p className='p-4 w-75 text-secondary text-center'>We value your feedback and are here to assist you with any inquiries you may have. Whether you have questions about our services, need support, or just want to get in touch, we're here to help.  </p>
                </div>
                    <center>
                        <hr className='w-25' />
                    </center>
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-xl-6">
                            <div className="row row-cols-md-2 g-4">
                                <div className="aos-item" data-aos="fade-up" data-aos-delay="200">
                                    <div className="aos-item__inner">
                                        <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
                                            <div className="d-flex justify-content-start">
                                                <HiOutlineMail className='fs-4' />
                                                <span className="h5 ms-2">Email</span>
                                            </div>
                                            <span>oneprofile@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="aos-item" data-aos="fade-up" data-aos-delay="400">
                                    <div className="aos-item__inner">
                                        <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
                                            <div className="d-flex justify-content-start">
                                                <FaPhone className='fs-4' />
                                                <span className="ms-2 h5">Phone</span>
                                            </div>
                                            <span>+0123456789, +9876543210</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="aos-item mt-4" data-aos="fade-up" data-aos-delay="600">
                                <div className="aos-item__inner">
                                    <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
                                        <div className="d-flex justify-content-start">
                                            <i className="fa-solid fa-location-pin h3 pe-2"></i>
                                            <span className="h5">Office location</span>
                                        </div>
                                        <span>200, Marimata Square, Indore, Madhaya Pradesh</span>
                                    </div>
                                </div>
                            </div>
                            <div className="aos-item" data-aos="fade-up" data-aos-delay="800">
                                <div className="mt-4 w-100 aos-item__inner">
                                    {/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                                    <iframe className="hvr-shadow" width="100%" height="345" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.95019066145!2d75.69868945380068!3d22.724204647553854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1715926062532!5m2!1sen!2sin&amp;height=300&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <h2 className="pb-4">Leave a message</h2>
                            <div className="row g-4">
                                <div className="col-6 mb-3">
                                    <label htmlFor="fname" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="fname" placeholder="John" />
                                </div>
                                <div className="col-6 mb-3">
                                    <label htmlFor="lname" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="lname" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="tel" className="form-control" id="phone" placeholder="+1234567890" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="country" className="form-label">State</label>
                                <select className="form-select" id="country" aria-label="Default select example">
                                    {statesOfIndia.map((data, index) => <option key={index} value={index + 1}>
                                        {data.name}
                                    </option>)}

                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="3"></textarea>
                            </div>
                            <button type="button" className="btn btn-dark">Send Message</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
