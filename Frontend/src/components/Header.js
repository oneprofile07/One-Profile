import React from 'react';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { IoNotificationsCircleSharp } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  
  return <>
  <header id="site-header">
    <nav class="navbar navbar-expand-lg navbar-dark p-2 fixed-top" style={{backgroundColor:'#3faaf5'}}>
      <div class="container">
        <h2 class="navbar-brand fw-bold fs-2" href="index.html"><span style={{color:'red'}}>O</span>ne<span style={{color:'red'}}>P</span>rofile</h2>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  mx-auto mb-2 mb-lg-0 fs-5">
            <li class="nav-item">
              <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#service">Services</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">404 Page</a></li>
                <li><a class="dropdown-item" href="#">Common Page</a></li>
                <li><a class="dropdown-item" href="#">FAQ Page</a></li>
                <li><a class="dropdown-item" href="#">Hero Page</a></li>
                <li><a class="dropdown-item" href="portfolios.html">Portfolio Page</a></li>
                <li><a class="dropdown-item" href="#">Single Page</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact Us</a>
            </li>
          </ul>
          <div class="d-flex">
            <input className='input ps-2' type='search' placeholder='Type name...'/>
            <button className='btn btn-success rounded-0 btn-outline-light'> Search</button>
          </div> 
          {isLoggedIn==="true"?(
            <div className='d-flex'>
              <FaUser className='text-white fs-2 m-2' style={{cursor:'pointer'}} onClick={()=>navigate("/userprofile")}/>
              <p className='text-white fs-4 m-2'>Profile</p>
              </div>
          ):(
          <div className='text-white float-end m-2'>
            <span className='border rounded btn btn-outline-secondary' onClick={()=>navigate("/signin")}>Sign in</span>
            <span className='border rounded ms-2 btn btn-secondary'  onClick={()=>navigate("/signup")}>Sign up</span>
          </div>
          )}
          <IoNotificationsCircleSharp style={{
          color: '#007bff', // Change the color of the icon
          fontSize: '35px',
          marginLeft:"40px", // Adjust the size of the icon
          cursor:"pointer"}}
          onClick={()=>navigate("/ReciveProfile")}
           />
        </div>
      </div>
    </nav>
  </header>
  </>
}

export default Header;