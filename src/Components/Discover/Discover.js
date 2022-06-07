import React from "react";
import "./Discover.css";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Logo3 from "../../assets/Yawn3.png";

const Discover = () => {
  return (
    <>
      <div className="discover">
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
                 
              </Grid>

              <Grid item>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                >
                  <Grid item>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#E29578",
                        fontFamily: "Poppins",
                        fontWeight: "400",
                      }}
                    >
                      Analysis
                    </Button>
                  </Grid>
                  <Grid item>
                  <Link to="/leaderboard" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#E29578",
                        fontFamily: "Poppins",
                        fontWeight: "400",
                      }}
                    >
                      Leader Board
                    </Button>
                    </Link>
                  </Grid>
                  <Grid item>
                  <Link to="/gameone" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#E29578",
                        fontFamily: "Poppins",
                        fontWeight: "400",
                      }}
                    >
                      Rewards
                    </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                >
                  <Grid item>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#E29578",
                        fontFamily: "Poppins",
                        fontWeight: "400",
                      }}
                    >
                      Sleeping Info
                    </Button>
                    {/* <Paper>
                  <Typography>Sleeping Info</Typography>
                </Paper> */}
                  </Grid>
                  <Grid item>
                    <Link to="/avatar" style={{ textDecoration: 'none' }}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#E29578",
                          fontFamily: "Poppins",
                          fontWeight: "400",
                        }}
                      >
                        Avatar
                      </Button>
                    </Link>
                    {/* <Paper>
                  <Typography>Avatar</Typography>
                </Paper> */}
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                >
                  <Grid item>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#E29578",
                        fontFamily: "Poppins",
                        fontWeight: "400",
                      }}
                    >
                      Calming Sounds
                    </Button>
                    {/* <Paper>
                      <Typography>Calming Sounds</Typography>
                    </Paper> */}
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#E29578",
                        fontFamily: "Poppins",
                        fontWeight: "400",
                      }}
                    >
                      Insomnia
                    </Button>
                    {/* <Paper>
                      <Typography>Insomnia</Typography>
                    </Paper> */}
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#E29578",
                        fontFamily: "Poppins",
                        fontWeight: "400",
                      }}
                    >
                      For Children
                    </Button>
                    {/* <Paper>
                      <Typography>For Children</Typography>
                    </Paper> */}
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#E29578",
                        fontFamily: "Poppins",
                        fontWeight: "400",
                      }}
                    >
                      Tips for Sleeping
                    </Button>
                    {/* <Paper>
                      <Typography>Tips for Sleeping</Typography>
                    </Paper> */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Discover;
