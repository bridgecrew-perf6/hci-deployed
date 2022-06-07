import { Paper, Typography } from "@mui/material";
import React from "react";
import "./Personalinfo.css";

import Avataar from "../../assets/avatar.jpg";
import Grid from "@mui/material/Grid";
import Logo3 from "../../assets/Yawn3.png";

const Personalinfo = () => {
  return (
    <>
      <div className="info">
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
                <img className="avatarImg" src={Avataar}></img>
              </Grid>
              <Grid item>
                <Typography
                  variant="h4"
                  sx={{
                    color: "black",
                    fontFamily: "Poppins",
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  Carolina Jhonson
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  sx={{
                    color: "black",
                    fontFamily: "Poppins",
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  Miami , United States
                </Typography>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Paper
                    outline
                    elevation={6}
                    sx={{ backgroundColor: "#FFDDD2" }}
                  >
                    <Typography
                      sx={{
                        color: "black",
                        fontFamily: "Poppins",
                        fontWeight: "300",
                      }}
                    >
                      Age: 19
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper
                    outline
                    elevation={6}
                    sx={{ backgroundColor: "#FFDDD2" }}
                  >
                    <Typography
                      sx={{
                        color: "black",
                        fontFamily: "Poppins",
                        fontWeight: "300",
                      }}
                    >
                      Height: 160cm
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper
                    outline
                    elevation={6}
                    sx={{ backgroundColor: "#FFDDD2" }}
                  >
                    <Typography
                      sx={{
                        color: "black",
                        fontFamily: "Poppins",
                        fontWeight: "300",
                      }}
                    >
                      Weight: 48kg
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper
                    outline
                    elevation={6}
                    sx={{ backgroundColor: "#FFDDD2" }}
                  >
                    <Typography
                      sx={{
                        color: "black",
                        fontFamily: "Poppins",
                        fontWeight: "300",
                      }}
                    >
                      Gender: Female
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper
                    outline
                    elevation={6}
                    sx={{ backgroundColor: "#FFDDD2" }}
                  >
                    <Typography
                      sx={{
                        color: "black",
                        fontFamily: "Poppins",
                        fontWeight: "300",
                      }}
                    >
                      Mobile Number: 6302006563
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper
                    outline
                    elevation={6}
                    sx={{ backgroundColor: "#FFDDD2" }}
                  >
                    <Typography
                      sx={{
                        color: "black",
                        fontFamily: "Poppins",
                        fontWeight: "300",
                      }}
                    >
                      Mail: carl@gmail.com
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Personalinfo;
