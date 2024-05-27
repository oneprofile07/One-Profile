// import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SignUpForm } from "./components/User/Signup.js";
import { SignInForm } from "./components/User/Signin.js";

import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Header from "./components/header.js";
import UserProfile from "./components/UserProfiles/userProfile.js";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import CustomiseProfile from "./components/UserProfiles/customizedProfile.js";
import ProfessionalProfile from "./components/UserProfiles/professionalProfile.js";
import { UpdateProfessional } from "./components/UserProfiles/updateProfesional.js";
import UserList from "./components/UserProfiles/userList.js";
import ForgetPassword from './components/User/forgetpassword.js';
import ResetPassword from './components/User/Resetpassword.js';

function App() {
  return (
    <>
      <Routes>
        <Route path="/footer" element={<Footer />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
        <Route path="/editCart" element={<CustomiseProfile />} />
        <Route path="/ProfessionalProfile" element={<ProfessionalProfile />} />
        <Route path="/UpdateProfessionalProfile" element={<UpdateProfessional />} />
        <Route path="/UserList" element={<UserList />} />

      </Routes>
    </>
  );
}

export default App;
