import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Logo3 from "../../assets/Yawn3.png";

const LogIn = () => {
  return (
    <>
      <div className="login">
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
                  Welcome Back! Login
                </Typography>
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
                  label="Password"
                  type="password"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item>
                <Grid container direction="row" justifyContent="space-between">
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Remember Password"
                    />
                  </Grid>
                  <Grid item>
                    <Typography>Forgot Password?</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
              <Link to="/discover" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#E29578",
                    fontFamily: "Poppins",
                    fontWeight: "400",
                  }}
                >
                  Login
                </Button>
                </Link>
              </Grid>
              <Grid item>
                <Typography>or continue with</Typography>
              </Grid>
              <Grid item>
                <Grid container direction="row" spacing={2}>
                  <Grid item>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#E29578",
                      }}
                    >
                      <GoogleIcon></GoogleIcon>
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#E29578",
                      }}
                    >
                      <FacebookIcon></FacebookIcon>
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#E29578",
                      }}
                    >
                      <TwitterIcon></TwitterIcon>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography>
                  Don't have an account ? <Link to="/register">Register</Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default LogIn;
