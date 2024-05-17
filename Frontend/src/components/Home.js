
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import './home.css'
import Header from './header';
function Home() {
    const navigate = useNavigate();
    return <>
            <Header />
        <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-6 align-self-center">
                                <div class="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <h2><h2 className='fw-bold m-0' id='logo'><span style={{ color: 'red' }}>O</span>ne<span style={{ color: "red" }}>P</span>rofile</h2>
                                                Your all-in-one Networking Solution</h2>
                                            <p>With One Profile, you can say goodbye to the hassle of carrying multiple business cards or remembering to update your online profiles.</p>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="white-button first-button scroll-to-section">
                                                <button className='btn btn-primary' onClick={() => navigate("/signup")}>Join Us</button>
                                            </div>
                                            <div class="white-button scroll-to-section">
                                                <button className='btn btn-primary'>Contact Us</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <img src="./assets/slider-dec.png" class="img-fluid" alt="" width="100%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default Home;