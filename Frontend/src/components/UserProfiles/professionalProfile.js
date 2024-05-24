// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// export default function ProfessionalProfile() {
//     const templates = [{ img1: "./Images/21.png", img2: "./Images/21.png", textcolor: "black" }, { img1: "./Images/15.png", img2: "./Images/15.png", textcolor: "black" }, { img1: "./Images/1.png", img2: "./Images/1.png", textcolor: "white" }, { img1: "./Images/2.png", img2: "./Images/3.png", textcolor: "black" }, { img1: "./Images/4.png", img2: "./Images/5.png", textcolor: "black" }, { img1: "./Images/6.png", img2: "./Images/21.png", textcolor: "black" }, { img1: "./Images/7.png", img2: "./Images/21.png", textcolor: "black" }, { img1: "./Images/8.png", img2: "./Images/21.png", textcolor: "black" }, { img1: "./Images/9.png", img2: "./Images/15.png", textcolor: "black" }, { img1: "./Images/10.png", img2: "./Images/22.png", textcolor: "black" }, { img1: "./Images/11.png", img2: "./Images/20.png", textcolor: "black" }, { img1: "./Images/12.png", img2: "./Images/12.png", textcolor: "white" }, { img1: "./Images/13.png", img2: "./Images/13.png", textcolor: "white" }, { img1: "./Images/14.png", img2: "./Images/15.png", textcolor: "black" }, { img1: "./Images/16.png", img2: "./Images/17.png", textcolor: "black" }, { img1: "./Images/18.png", img2: "./Images/18.png", textcolor: "white" }, { img1: "./Images/19.png", img2: "./Images/19.png", textcolor: "white" }];
//     const [professionalProfileCard, setprofessionalProfileCard] = useState([{ img1: "./Images/12.png", img2: "./Images/12.png", textcolor: "white" }]);
//     const [profileData, setProfileData] = useState(null);
//     const location = useLocation();
//     const professionalId = location.state?.professionalId;
//     const userId = localStorage.getItem('userId');


//     useEffect(() => {
//         if (userId && professionalId) {
//             axios.post("http://localhost:3000/professional/viewByUserId", { userId, professionalId })
//                 .then(response => {
//                     console.log(response.data);
//                     setProfileData(response.data.data);
//                 })
//                 .catch(err => {
//                     console.log(err);
//                 });
//         }
//     }, [userId, professionalId]);
//     return <>
//         <div className='d-flex flex-wrap justify-content-evenly gap-4'>
//         {profileData.map((profile, index) => (
//             <div className="card personalcard1-img d-flex align-items-center justify-content-center flex-column text-center" style={{ width: "18rem", height: "500px", color: `${professionalProfileCard[0].textcolor}`, background: `url(${professionalProfileCard[0].img1}) center/cover no-repeat ` }}>
//                 <div className="card-body p-4 pt-5 mt-3 p-0 m-0">
//                     <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="m-0 rounded-circle bg-light border border-3 border-secondary p-1 bg-light" width="120px" height="120px" alt="..." />
//                     <h5 className="card-title text-secondary fs-6 m-0 p-0">{profile.designation}</h5>
//                     <p className="card-text fs-3 p-0 mb-3">{profile.fullName}</p>
//                     <p className="card-text text-secondary text-start p-0 m-0 my-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-plus-fill" viewBox="0 0 16 16">
//                         <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5" />
//                     </svg> {profile.mobile}</p>
//                     <p className="card-text text-secondary text-start p-0 m-0 my-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
//                         <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
//                     </svg>{profile.email}</p>
//                     <p className="card-text text-secondary text-start p-0 m-0 my-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
//                         <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
//                     </svg> {profile.address}</p>
//                     <p className="card-text text-secondary text-start p-0 m-0 my-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16">
//                         <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" />
//                         <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z" />
//                     </svg> {profile.organization}</p>

//                 </div>
//             </div>
//         ))}
//         </div>
//         <div className="container text-center d-flex gap-3 flex-nowrap overflow-auto bg-secondary overflow-x-scroll mt-3 p-2" style={{ scrollbarWidth: "none", boxShadow: "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)" }}>
//             {templates.map((img, index) => <div key={index} className="card shadow border border-dark" id="view_hover" style={{ flex: "0 0 auto" }}>
//                 <img src={img.img1} onClick={() => setprofessionalProfileCard([{ img1: img.img1, img2: img.img2, textcolor: img.textcolor }])} className="card-img" style={{ width: "50px", cursor: "pointer" }} height={90} alt="..." />
//             </div>)}
//         </div>
//     </>
// }


import axios from "axios";
import { useEffect, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import { IoIosShareAlt } from "react-icons/io";


export default function ProfessionalProfile() {

    const navigate = useNavigate();


   const updateForm = ()=>{
        navigate("/UpdateProfessionalProfile",{state:{professionalId,profileData}})
    }

    
   
    const templates = [
        { img1: "./Images/21.png", img2: "./Images/21.png", textcolor: "black" },
        { img1: "./Images/15.png", img2: "./Images/15.png", textcolor: "black" },
        { img1: "./Images/1.png", img2: "./Images/1.png", textcolor: "white" },
        { img1: "./Images/2.png", img2: "./Images/3.png", textcolor: "black" },
        { img1: "./Images/4.png", img2: "./Images/5.png", textcolor: "black" },
        { img1: "./Images/6.png", img2: "./Images/21.png", textcolor: "black" },
        { img1: "./Images/7.png", img2: "./Images/21.png", textcolor: "black" },
        { img1: "./Images/8.png", img2: "./Images/21.png", textcolor: "black" },
        { img1: "./Images/9.png", img2: "./Images/15.png", textcolor: "black" },
        { img1: "./Images/10.png", img2: "./Images/22.png", textcolor: "black" },
        { img1: "./Images/11.png", img2: "./Images/20.png", textcolor: "black" },
        { img1: "./Images/12.png", img2: "./Images/12.png", textcolor: "white" },
        { img1: "./Images/13.png", img2: "./Images/13.png", textcolor: "white" },
        { img1: "./Images/14.png", img2: "./Images/15.png", textcolor: "black" },
        { img1: "./Images/16.png", img2: "./Images/17.png", textcolor: "black" },
        { img1: "./Images/18.png", img2: "./Images/18.png", textcolor: "white" },
        { img1: "./Images/19.png", img2: "./Images/19.png", textcolor: "white" }
    ];
    const [professionalProfileCard, setProfessionalProfileCard] = useState(templates[0]);
    const [profileData, setProfileData] = useState([]);
    const location = useLocation();
    // const professionalId = location.state?.professionalId;
    const userId = localStorage.getItem('userId');
    const professionalId = localStorage.getItem('professionalId');

    useEffect(() => {
        if (userId && professionalId) {
            axios.post("http://localhost:3000/professional/viewByUserId", { userId, professionalId })
                .then(response => {
                    console.log(response.data);
                    setProfileData(response.data.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [userId, professionalId]);

    return (
        <>
        <IoIosShareAlt  style={{
          color: '#007bff', // Change the color of the icon
          fontSize: '60px', // Adjust the size of the icon
          marginLeft:"700px",
          cursor:"pointer"
        }} onClick={()=>navigate("/UserList")}/>
            <div className='d-flex flex-wrap justify-content-evenly gap-4'>
                
                {profileData && profileData.length > 0 ? profileData.map((profile, index) => (
                    <div key={index} className="card personalcard1-img d-flex align-items-center justify-content-center flex-column text-center" style={{ width: "18rem", height: "500px", color: `${professionalProfileCard.textcolor}`, background: `url(${professionalProfileCard.img1}) center/cover no-repeat ` }}>
                        
                        <div className="card-body p-4 pt-5 mt-3 p-0 m-0">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="m-0 rounded-circle bg-light border border-3 border-secondary p-1 bg-light" width="120px" height="120px" alt="..." />
                            <h5 className="card-title text-secondary fs-6 m-0 p-0">{profile.designation}</h5>
                            <p className="card-text fs-3 p-0 mb-3">{profile.fullName}</p>
                            <p className="card-text text-secondary text-start p-0 m-0 my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-plus-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5" />
                                </svg> {profile.mobile}
                            </p>
                            <p className="card-text text-secondary text-start p-0 m-0 my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                                </svg> {profile.email}
                            </p>
                            <p className="card-text text-secondary text-start p-0 m-0 my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                </svg> {profile.address}
                            </p>
                            <p className="card-text text-secondary text-start p-0 m-0 my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-buildings" viewBox="0 0 16 16">
                                    <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" />
                                    <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z" />
                                </svg> {profile.organization}
                            </p>
                        </div>
                    </div>
                )) : <p>No profiles found</p>}
            </div>
            <div className="container text-center d-flex gap-3 flex-nowrap overflow-auto bg-secondary overflow-x-scroll mt-3 p-2" style={{ scrollbarWidth: "none", boxShadow: "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)" }}>
                {templates.map((img, index) => (
                    <div key={index} className="card shadow border border-dark" id="view_hover" style={{ flex: "0 0 auto" }}>
                        <img src={img.img1} onClick={() => setProfessionalProfileCard(img)} className="card-img" style={{ width: "50px", cursor: "pointer" }} height={90} alt="..." />
                    </div>
                ))}
            </div>

            <button className="btn btn-dark mt-3 p-1 py-2" onClick={updateForm}>Update</button>

        </>

    );
}
