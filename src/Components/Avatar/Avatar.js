import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Avataar from "../../assets/avatar.jpg";
import "./Avatar.css";

import CheckroomIcon from "@mui/icons-material/Checkroom";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Logo3 from "../../assets/Yawn3.png";

const Avatar = () => {
  return (
    <>
      <div className="avatar">
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Grid item>
            <img src={Logo3} alt="" />
          </Grid>
          <Grid item>
            <Grid container alignItems="center" direction="column" spacing={2}>
              <Grid item>
                <Typography
                  variant="h3"
                  sx={{
                    color: "black",
                    fontFamily: "Poppins",
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  Avatar
                </Typography>
              </Grid>

              <Grid item>
                <img src={Avataar} alt="snapchatAvatar" className="avatarimg" />
              </Grid>
              <Grid item>
                {/* <Grid container direction="column"> */}
                  {/* <Paper
                    outline
                    elevation={24}
                    sx={{ width: "100%", backgroundColor: "#E29578" }}
                  > */}

                  <Typography
                    variant="h4"
                    sx={{
                      color: "black",
                      fontFamily: "Poppins",
                      textAlign: "center",
                      fontWeight: "300",
                    }}
                  >
                    Carolina Jhonson
                  </Typography>
                  </Grid>
                  <Grid item>
                  
                  <Typography variant="h6"
                    sx={{
                      color: "black",
                      fontFamily: "Poppins",
                      textAlign: "center",
                      fontWeight: "200",
                    }}>
                    <CheckroomIcon></CheckroomIcon>
                    Change Outfit
                  </Typography>
                  </Grid>
                  <Grid item>
                  <Typography variant="h6"
                    sx={{
                      color: "black",
                      fontFamily: "Poppins",
                      textAlign: "center",
                      fontWeight: "200",
                    }}>
                    <ShareIcon></ShareIcon>
                    Share Avatar
                  </Typography>
                  </Grid>
                  <Grid item>
                  <Typography variant="h6"
                    sx={{
                      color: "black",
                      fontFamily: "Poppins",
                      textAlign: "center",
                      fontWeight: "200",
                    }}>
                    <EditIcon></EditIcon>
                    Edit Avatar
                  </Typography>
                  </Grid>
                  {/* </Paper> */}
                </Grid>
              </Grid>
            </Grid>
    
      </div>
    </>
  );
};

export default Avatar;
