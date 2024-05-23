import { useState } from "react";

export default function EducationProfile() {
    const templates = [{ img1: "./Images/21.png", img2: "./Images/21.png", textcolor: "black" }, { img1: "./Images/15.png", img2: "./Images/15.png", textcolor: "black" }, { img1: "./Images/1.png", img2: "./Images/1.png", textcolor: "white" }, { img1: "./Images/2.png", img2: "./Images/3.png", textcolor: "black" }, { img1: "./Images/4.png", img2: "./Images/5.png", textcolor: "black" }, { img1: "./Images/6.png", img2: "./Images/21.png", textcolor: "black" }, { img1: "./Images/7.png", img2: "./Images/21.png", textcolor: "black" }, { img1: "./Images/8.png", img2: "./Images/21.png", textcolor: "black" }, { img1: "./Images/9.png", img2: "./Images/15.png", textcolor: "black" }, { img1: "./Images/10.png", img2: "./Images/22.png", textcolor: "black" }, { img1: "./Images/11.png", img2: "./Images/20.png", textcolor: "black" }, { img1: "./Images/12.png", img2: "./Images/12.png", textcolor: "white" }, { img1: "./Images/13.png", img2: "./Images/13.png", textcolor: "white" }, { img1: "./Images/14.png", img2: "./Images/15.png", textcolor: "black" }, { img1: "./Images/16.png", img2: "./Images/17.png", textcolor: "black" }, { img1: "./Images/18.png", img2: "./Images/18.png", textcolor: "white" }, { img1: "./Images/19.png", img2: "./Images/19.png", textcolor: "white" }];
    const [educationProfileCard, seteducationProfileCard] = useState([{ img1: "./Images/1.png", img2: "./Images/1.png", textcolor: "white" }]);
    return <>
        <div className='d-flex flex-wrap justify-content-evenly gap-4'>
            <div className="card personalcard1-img d-flex align-items-center justify-content-center flex-column text-center" style={{ width: "18rem", height: "500px", color: `${educationProfileCard[0].textcolor}`, background: `url(${educationProfileCard[0].img1}) center/cover no-repeat` }}>
                <div className="card-body p-4 m-0 mt-4">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="m-0 rounded-circle bg-light border border-3 border-secondary p-1 bg-light" width="120px" height="120px" alt="..." />
                    <p className="card-text p-0 m-0 mt-2">Raj Thakur</p>
                    <p className="card-text p-0 m-0">8827142011</p>
                    <p className="card-text p-0 m-0">rajthakur8827142011@gmail.com</p>
                    <hr />
                    <div className='d-flex justify-content-between mt-2'>
                        <p className="card-text p-0 m-0">Gender :</p>
                        <p className="card-text text-secondary p-0 m-0">male</p>
                    </div>
                    <div className='d-flex justify-content-between mt-2'>
                        <p className="card-text p-0 m-0">Date of Birth :</p>
                        <p className="card-text text-secondary p-0 m-0">29 Oct 2002</p>
                    </div>
                    <hr />
                    <p className="card-text text-secondary p-0 m-0">khandwa Naka, Sant Nagar, Indore (Madhya Predesh)</p>
                </div>
            </div>
            <div className="card personalcard2-img d-flex align-items-center justify-content-center flex-column text-center" style={{ width: "18rem", height: "500px", color: `${educationProfileCard[0].textcolor}`, background: `url(${educationProfileCard[0].img2}) center/cover no-repeat ` }}>
                <div className="card-body p-4 py-5 p-0 m-0">
                    <p className="card-text p-0 m-0">Under Graduation</p>
                    <hr className="m-1 w-75 ms-4" />
                    <p className="card-text p-0 m-0 fw-light">Swami Vivekanand College of Engineering</p>
                    <hr className="m-2" />
                    <div className='d-flex justify-content-between mt-2'>
                        <p className="card-text text-secondary p-0 m-0">Graduation :</p>
                        <p className="card-text text-secondary p-0 m-0">BTECH (IT)</p>
                    </div>
                    <div className='d-flex justify-content-between mt-2'>
                        <p className="card-text text-secondary p-0 m-0">UG CGPA :</p>
                        <p className="card-text text-secondary p-0 m-0">7.23 CGPA</p>
                    </div>
                    <div className='d-flex justify-content-between mt-2'>
                        <p className="card-text text-secondary p-0 m-0">Paasing Year :</p>
                        <p className="card-text text-secondary p-0 m-0">June 2025</p>
                    </div>
                    <hr className="m-2" />
                    <p className="card-text p-0 m-0">Post Graduation</p>
                    <hr className="m-1 w-75 ms-4" />
                    <p className="card-text p-0 m-0 fw-light">Swami Vivekanand College of Engineering</p>
                    <hr className="m-2" />
                    <div className='d-flex justify-content-between mt-2'>
                        <p className="card-text text-secondary p-0 m-0">Graduation :</p>
                        <p className="card-text text-secondary p-0 m-0">MTECH (IT)</p>
                    </div>
                    <div className='d-flex justify-content-between mt-2'>
                        <p className="card-text text-secondary p-0 m-0">PG CGPA :</p>
                        <p className="card-text text-secondary p-0 m-0">7.23 CGPA</p>
                    </div>
                    <div className='d-flex justify-content-between mt-2'>
                        <p className="card-text text-secondary p-0 m-0">Paasing Year :</p>
                        <p className="card-text text-secondary p-0 m-0">June 2027</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container text-center d-flex gap-3 flex-nowrap overflow-auto bg-secondary overflow-x-scroll mt-3 p-2" style={{ scrollbarWidth: "none", boxShadow: "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)" }}>
            {templates.map((img, index) => <div key={index} className="card shadow border border-dark" id="view_hover" style={{ flex: "0 0 auto" }}>
                <img src={img.img1} onClick={() => seteducationProfileCard([{ img1: img.img1, img2: img.img2, textcolor: img.textcolor }])} className="card-img" style={{ width: "50px", cursor: "pointer" }} height={90} alt="..." />
            </div>)}
        </div>
    </>
}