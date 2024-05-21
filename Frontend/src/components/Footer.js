import React from 'react'
import { FaLink } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#3faaf5" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>

    <footer id="site-footer">
      <div class="py-5" style={{ backgroundColor: '#3faaf5' }}>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-xl-3 col-sm-12">
              <h5 class="pb-3"><i class="fa-solid fa-user-group pe-1"></i> About us</h5>
              <span class="text-dark">With One Profile, you can say goodbye to the hassle of carrying multiple business cards or remembering to update your online profiles.</span>
            </div>
            <div class="col-md-6 col-xl-3 col-sm-12">
              <h5 class="pb-3"><FaLink />  Important links</h5>
              <ul>
                <li><a href="#about" class="text-decoration-none link-secondary">About us</a></li>
                <li><a href="#" class="text-decoration-none link-secondary">Privacy policy</a></li>
                <li><a href="#" class="text-decoration-none link-secondary">Terms of services</a></li>
              </ul>
            </div>
            <div class="col-md-6 col-xl-3 col-sm-12">
              <h5 class="pb-3"><FaMapMarkerAlt /> Our location</h5>
              <span class="text-secondary">
                Marimata Square<br />
                Indore, Pradesh<br />
                India<br />
              </span>
            </div>
            <div class="col-md-6 col-xl-3 col-sm-12">
              <h5 class="pb-3"><i class="fa-solid fa-paper-plane pe-1"></i> Stay updated</h5>
              <form>
                <input type="text" class="w-100 mb-2 form-control" name="" placeholder="Email ID" />
                <button class="w-100 btn btn-dark">Subscribe now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
}

export default Footer
