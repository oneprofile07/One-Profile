import React from 'react'
import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
      <section id='main-foot'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <footer class="footer" style={{marginTop:'-3px'}}>
          <div class="container">
            <div class="row">
              <div class="footer-col">
                <h4>company</h4>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Help</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>Profile</h4>
                <ul>
                  <li><a href="#">Personal</a></li>
                  <li><a href="#">Professional</a></li>
                  <li><a href="#">Educational</a></li>
                  <li><a href="#">Medical</a></li>
                  {/* <li><a href="#">Business</a></li> */}
                </ul>
              </div>
              <div class="footer-col">
                <h4>online shop</h4>
                <ul>
                  <li><a href="#">watch</a></li>
                  <li><a href="#">bag</a></li>
                  <li><a href="#">shoes</a></li>
                  <li><a href="#">dress</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                  <a href="#"><FaFacebook /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><FaLinkedinIn /></a>
                </div>
                <h2 className='mt-4 fw-bold' id='logo'><span style={{ color: 'red' }}>O</span>ne<span style={{ color: "red" }}>P</span>rofile</h2>
              </div>
            </div>
          </div>
        </footer>
      </section>

    </>
  )
}

export default Footer
