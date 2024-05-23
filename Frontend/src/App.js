// import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SignUpForm } from "./components/User/Signup.js";
import { SignInForm } from "./components/User/Signin.js";

import Footer from "./components/Footer.js";
import Home from "./components/home.js";
import Header from "./components/header.js";
import UserProfile from "./components/UserProfiles/userProfile.js";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import CustomiseProfile from "./components/UserProfiles/customizedProfile.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/" element={<Home/>}/>
        <Route path="/header" element={<Header/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/userprofile" element={<UserProfile/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services/>}/>
        <Route path="/editCart" element={<CustomiseProfile/>}/>
      </Routes>
    </>
  );
}

export default App;
