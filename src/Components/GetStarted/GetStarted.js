import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./GetStarted.css";

import Logo from "../../assets/YAWN.png";
import Logo2 from "../../assets/Yawn2.png";
import Logo3 from "../../assets/Yawn3.png";
import Grid from "@mui/material/Grid";
import { fontWeight } from "@mui/system";

const GetStarted = () => {
  return (
    <>
      <div className="getStarted">
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
            <Grid container direction="column" spacing={5} alignItems="center">
              <Grid item>
                <Typography
                  sx={{
                    color: "black",
                    fontFamily: "Poppins",
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                  variant="h4"
                >
                  "Sleep is the best Meditation.":
                  <br></br> -Dalai Lama
                </Typography>
              </Grid>
              <Grid item>
                {/* <nav > */}
                <Link to="/register" style={{ textDecoration: 'none' }}>
                  <Button
                    className="btn"
                    sx={{
                      backgroundColor: "#E29578",
                      fontFamily: "Poppins",
                      fontWeight: "200",
                    }}
                    disableRipple
                    variant="contained"
                  >
                    Get Started
                  </Button>
                </Link>
                {/* </nav> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default GetStarted;
