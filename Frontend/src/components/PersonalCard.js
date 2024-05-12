import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function PersonalCard() {
  const personalNavigate = useNavigate();

  const personalForm = () => {
    personalNavigate("/personal-form");
  };

  return (
    <Card sx={{ maxWidth: 250, mt: 8 }}>
      <CardMedia
        sx={{ height: 230 }}
        image="/assets/Personal.jpg"
        title="Personal Profile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Personal Profile
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eius
          magnam vitae!
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="success"
          sx={{ width: "100%" }}
          onClick={personalForm}
        >
          Create
        </Button>
      </CardActions>
    </Card>
  );
}