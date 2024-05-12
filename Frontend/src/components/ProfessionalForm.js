import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function ProfessionalForm() {
  const navigate = useNavigate();
  const [date, setDate] = useState(dayjs("1965-06-20"));
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    designation: "",
    dateOfBirth: date.format("YYYY-MM-DD"),
    mobile: "",
    address: "",
    additionalInfo: "",
  });
  const [userId, setUserId] = useState("");

  useEffect(() => {
    // Retrieve userId from session storage
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      // Update userId state
      setUserId(storedUserId);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    console.log("handle submit work")
    e.preventDefault();
    try {
      // Add userId to formData before sending
      const dataToSend = {
        ...formData,
        userId: userId,
      };
      const response = await axios.post("http://localhost:3000/professional/create", dataToSend);
      // Extract userId from response
      const ProfileId = response.data.data._id;
      console.log(ProfileId);
      // Save userId to sessionStorage
      // sessionStorage.setItem('userId', userId);
      Swal.fire({
        position:"top-center",
        icon: "success",
        title: "Sign Up Successfully",
        showConfirmButton: false,
        timer: 1500
      });
      navigate("/home");
      
    } catch (error) {
      console.error("Error creating professional profile:", error);
      Swal.fire({
        icon: "error",
        title: "Sorry",
        text: "Please try Again!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  };

  return <>
  <ToastContainer/>
  <div className="container">
  <div className=""
      style={{
        display: "flex",
        flexDirection: "coloumn",
        justifyContent: "center",
        backgroundColor: "#93CA9B",
        background: "linear-gradient(135deg, #8DA0C8 , #90EE90)",
      }}
    >
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "30ch" },
          backgroundColor: "#63e6be",
          display: "flex",
          flexDirection: "column", // Change to column
          justifyContent: "center",
          padding: "0 1.5rem",
          height: "auto",
          boxShadow: "5px 5px 15px black",
          borderRadius: "5px",
          marginTop: "1.1rem",
          marginBottom: "1.1rem",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          id="standard-basic"
          label="Full Name"
          variant="standard"
        />
        <ToastContainer />
        <TextField
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          id="standard-basic"
          label="Email"
          variant="standard"
        />
        <TextField
          name="organization"
          value={formData.organization}
          onChange={handleInputChange}
          id="standard-basic"
          label="Organization"
          variant="standard"
        />
        <TextField
          name="designation"
          value={formData.designation}
          onChange={handleInputChange}
          id="standard-basic"
          label="Designation"
          variant="standard"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date of Birth"
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
              setFormData({
                ...formData,
                dateOfBirth: newValue.format("YYYY-MM-DD"),
              });
            }}
          />
        </LocalizationProvider>
        <TextField
          name="mobile"
          value={formData.mobile}
          onChange={handleInputChange}
          id="standard-basic"
          label="Mobile"
          variant="standard"
        />
        <TextField
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          id="standard-basic"
          label="Address"
          variant="standard"
        />
        <TextField
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleInputChange}
          id="standard-basic"
          label="Additional Information"
          variant="standard"
        />

        <label htmlFor="image" style={{ color: "#454545" }}>
          Upload Image
        </label>
        <input type="file" id="image" />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "0.5rem",
          }}
        >
          <Button type="reset" variant="outlined">
            Reset
          </Button>
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Box>
    </div>

  </div>
    
  </>

}
