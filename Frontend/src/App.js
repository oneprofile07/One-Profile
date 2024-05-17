// import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SignUpForm } from "./components/User/Signup.js";
import { SignInForm } from "./components/User/Signin.js";
import Footer from "./Footer.js";
import Home from "./components/home.js";
import Header from "./components/header.js";
import UserProfile from "./components/UserProfiles/userProfile.js";


function App() {
  return (
    <>
      <Routes>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/" element={<Home/>}/>
        <Route path="/header" element={<Header/>}/>
        <Route path="/userprofile" element={<UserProfile/>}/>
      </Routes>
    </>
  );
}

export default App;
