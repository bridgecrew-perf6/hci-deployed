import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Logo3 from "../../assets/Yawn3.png";

const Register = () => {
  return (
    <>
      <div className="register">
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-around"
        >
          <Grid item>
            <img src={Logo3}></img>
          </Grid>
          <Grid item>
            {/* <Box className="box" sx={{}}> */}
            {/* <div className="regDetails">
            <Paper outlined elevation={24} sx={{}}> */}
            <Grid container direction="column" spacing={2} alignItems="center">
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
                  Register Now
                </Typography>
                {/* <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Poppins",
                    textAlign: "center",
                    fontWeight: "200",
                  }}
                >
                  Welcome to
                </Typography> */}
              </Grid>

              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Username/Email"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Nickname"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  type="password"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label=" Confirm Password"
                  type="password"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item>
                <Link to="/discover" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#E29578",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                    }}
                  >
                    Register Now
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    textAlign: "center",
                    fontWeight: "200",
                  }}
                >
                  Already Have a Account ? <Link to="/login">Login</Link>{" "}
                </Typography>
              </Grid>
            </Grid>
            {/* </Paper>
              </div> */}
            {/* </Box> */}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Register;
