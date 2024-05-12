import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export default function SendProfile() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Retrieve userId from sessionStorage
    const userId = localStorage.getItem("userId");

    // Fetch data using userId
    axios.get(`http://localhost:3000/professional/viewById/${userId}`)
      .then(response => {
        const data = response.data.data;
        console.log(data);
        // Check if data contains _id field before mapping
        if (Array.isArray(data) && data.length > 0 && data[0]._id) {
          const mappedData = data.map(({ _id, fullName, email }) => ({
            _id: _id.$oid, // Convert ObjectId to string
            primary: fullName,
            secondary: email
          }));
          // setMessages(mappedData);
          setMessages(data);

        } else {
          console.error("Data format is incorrect or _id is not available.");
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  let navigate = useNavigate();

  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <List>
        {messages.map(({ _id, fullName, email }, index) => (
          <ListItemButton className="border border-dark"  key={index}>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText primary={fullName} secondary={email} onClick={()=>navigate("/card",{state:_id})} />
            <Stack className="border border-dark" direction="row" spacing={2}>
              <Button variant="outlined" startIcon={<EditIcon />}>
                Edit
              </Button>
              <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
              </Button>
              <Button onClick={()=>navigate("/send", {state: _id})} variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </Stack>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Button from "@mui/material/Button";
// import SendIcon from "@mui/icons-material/Send";
// import List from "@mui/material/List";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import ListItemText from "@mui/material/ListItemText";
// import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// export default function SendProfile() {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     // Retrieve userId from sessionStorage
//     const userId = sessionStorage.getItem("userId");

//     // Fetch data using userId
//     axios.get(`http://localhost:3000/professional/viewById/${userId}`)
//       .then(response => {
//         const data = response.data.data;
//         setMessages(data);
//         console.log(data);
//         // Check if data contains _id field before mapping
//         if (Array.isArray(data) && data.length > 0 && data[0]._id) {
//           // Convert ObjectId to string and set the messages state
//           // setMessages(data.map(({ _id, fullName, email }) => ({
//           //   id: _id.$oid, // Convert ObjectId to string
//           //   fullName,
//           //   email
//           // })));
//         } else {
//           console.error("Data format is incorrect or _id is not available.");
//         }
//       })
//       .catch(error => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   return (
//     <Box sx={{ pb: 7 }}>
//       <CssBaseline />
//       <List>
//         {messages.map(({ id, fullName, email }, index) => (
//           <ListItemButton className="border border-dark" key={index}>
//             <ListItemAvatar>
//               <Avatar />
//             </ListItemAvatar>
//             <ListItemText primary={fullName} secondary={email} />
//             <ListItemText primary={`ID: ${id}`} />
//             <Stack className="border border-dark" direction="row" spacing={2}>
//               <Button variant="outlined" startIcon={<EditIcon />}>
//                 Edit
//               </Button>
//               <Button variant="outlined" startIcon={<DeleteIcon />}>
//                 Delete
//               </Button>
//               <Button onClick={() => console.log(messages._id)}  variant="contained" endIcon={<SendIcon />}>
//                 Send
//               </Button>
//             </Stack>
//           </ListItemButton>
//         ))}
//       </List>
//     </Box>
//   );
// }
