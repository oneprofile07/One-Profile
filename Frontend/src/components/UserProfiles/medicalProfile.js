import { useState } from "react";

export default function MedicalProfile() {
    const templates = [{ img1: "./Images/21.png", img2: "./Images/21.png", textcolor: "black" }, { img1: "./Images/15.png", img2: "./Images/15.png", textcolor: "black" }, { img1: "./Images/1.png", img2: "./Images/1.png", textcolor: "white" }, { img1: "./Images/2.png", img2: "./Images/3.png", textcolor: "black" }, { img1: "./Images/4.png", img2: "./Images/5.png", textcolor: "black" }, { img1: "./Images/6.png", img2: "./Images/21.png", textcolor: "black" }, { img1: "./Images/7.png", img2: "./Images/21.png", textcolor: "black" }, { img1: "./Images/8.png", img2: "./Images/21.png", textcolor: "black" }, { img1: "./Images/9.png", img2: "./Images/15.png", textcolor: "black" }, { img1: "./Images/10.png", img2: "./Images/22.png", textcolor: "black" }, { img1: "./Images/11.png", img2: "./Images/20.png", textcolor: "black" }, { img1: "./Images/12.png", img2: "./Images/12.png", textcolor: "white" }, { img1: "./Images/13.png", img2: "./Images/13.png", textcolor: "white" }, { img1: "./Images/14.png", img2: "./Images/15.png", textcolor: "black" }, { img1: "./Images/16.png", img2: "./Images/17.png", textcolor: "black" }, { img1: "./Images/18.png", img2: "./Images/18.png", textcolor: "white" }, { img1: "./Images/19.png", img2: "./Images/19.png", textcolor: "white" }];
    const [medicalProfileCard, setmedicalProfileCard] = useState([{ img1: "./Images/4.png", img2: "./Images/5.png", textcolor: "black" }]);

    return <>
        <div className='d-flex flex-wrap justify-content-evenly gap-4'>
            <div className="card personalcard1-img d-flex align-items-center justify-content-start flex-column text-center" style={{ width: "18rem", height: "500px", color: `${medicalProfileCard[0].textcolor}`, background: `url(${medicalProfileCard[0].img1}) center/cover no-repeat` }}>
                <div className="card-body p-4 p-0 m-0">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="m-0 rounded-circle bg-light border border-3 border-secondary p-1 bg-light" width="120px" height="120px" alt="..." />
                    <p className="card-text p-0 m-0">Raj Thakur</p>
                    <p className="card-text p-0 m-0">8827142011</p>
                    <p className="card-text p-0 m-0">rajthakur8827142011@gmail.com</p>
                    <hr className='my-1' />
                    <div className='d-flex justify-content-between'>
                        <p className="text-secondary card-text p-0 m-0">Date of Birth:-</p>
                        <p className="text-secondary card-text p-0 m-0">29 Oct 2002</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className="text-secondary card-text p-0 m-0">Blood Group:-</p>
                        <p className="text-secondary card-text p-0 m-0">AB+</p>
                    </div>
                    <div className='d-flex justify-content-between mt-2'>
                        <p className="text-secondary card-text p-0 m-0">Height:-</p>
                        <p className="text-secondary card-text p-0 m-0">5.7 ft</p>
                    </div>
                    <div className='d-flex justify-content-between mt-2'>
                        <p className="text-secondary card-text p-0 m-0">Weight:-</p>
                        <p className="text-secondary card-text p-0 m-0">50 kg</p>
                    </div>
                    <hr className='my-1' />
                    <p className="card-text p-0 m-0">Medical History</p>
                    <hr className='my-1' />
                    <p className="text-secondary card-text p-0 m-0">I was having BP problim since last two years so still i am taking tablets for it</p>
                    <hr/>
                </div>
            </div>
        </div>
        <div className="container text-center d-flex gap-3 flex-nowrap overflow-auto bg-secondary overflow-x-scroll mt-3 p-2" style={{ scrollbarWidth: "none", boxShadow: "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)" }}>
            {templates.map((img, index) => <div key={index} className="card shadow border border-dark" id="view_hover" style={{ flex: "0 0 auto" }}>
                <img src={img.img1} onClick={() => setmedicalProfileCard([{ img1: img.img1, img2: img.img2, textcolor: img.textcolor }])} className="card-img" style={{ width: "50px", cursor: "pointer" }} height={90} alt="..." />
            </div>)}
        </div>
    </>
}