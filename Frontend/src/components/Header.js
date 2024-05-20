import React from 'react';
import './header.css'
import { FaUser } from 'react-icons/fa';

const Header = () => {
  return <>
  <header id="site-header">
    <nav class="navbar navbar-expand-lg navbar-dark p-3 bg-dark fixed-top">
      <div class="container">
        <h2 class="navbar-brand fw-bold fs-4" href="index.html">OneProfile</h2>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
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
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Contact</a>
            </li>
          </ul>
          <div class="d-flex">
            <input className='input ps-2' type='search' placeholder='Type name...'/>
            <button className='btn rounded-0 btn-outline-light'> Search</button>
          </div> 
          <div className='text-white float-end m-2'>
            <span className='border rounded btn btn-outline-secondary'>Sign in</span>
            <span className='border rounded ms-2 btn btn-secondary'>Sign up</span>
          </div>
        </div>
      </div>
    </nav>
  </header>
  </>
}

export default Header;