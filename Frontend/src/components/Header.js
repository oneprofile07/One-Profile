import React from 'react';
import './header.css'
const Header = () => {
  return <>
  <nav class="navbar navbar-expand-lg " style={{backgroundColor:'#6191f1'}}>
  <div class="container-fluid">
    <h1 class="navbar-brand ms-4 fw-bolder text-white fs-3 mt-2" href="#"><span style={{color:'red'}}>O</span>ne<span style={{color:'red'}}>P</span>rofile</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-3" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active fs-5" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="#">About Us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link cursor-pointer fs-5" >Contact Us</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </>
}

export default Header;