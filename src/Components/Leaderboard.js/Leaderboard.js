import { Typography } from "@mui/material";
import React from "react";
import "./Leaderboard.css";

import Paper from "@mui/material/Paper";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Grid from "@mui/material/Grid";
import Logo3 from "../../assets/Yawn3.png";

const Leaderboard = () => {
  const positions = [
    {
      name: "Aniket",
      score: "123",
    },
    {
      name: "Nirmal",
      score: "100",
    },
    {
      name: "Abhinav",
      score: "90",
    },
    {
      name: "Suyash",
      score: "80",
    },
    {
      name: "Nipun",
      score: "75",
    },
    {
      name: "Sarthak",
      score: "74",
    },
    {
      name: "Karan",
      score: "20",
    },
  ];

  return (
    <>
      <div className="leaderboard">
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
            <Grid container direction="column" spacing={2}>
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
                  Leaderboard
                </Typography>
              </Grid>
              <Grid item>
                {positions.map((position) => {
                  return (
                    <Paper
                      sx={{
                        backgroundColor: "#FFDDD2",
                        width: "100%",
                        margin: "auto",
                      }}
                    >
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        
                      >
                      <Grid item>
                        <Typography>{position.name}</Typography>
                      </Grid>
                      <Grid item>
                        <FavoriteIcon sx={{ color: "red" }}></FavoriteIcon>
                      </Grid>
                      <Grid item>
                        <Typography>{position.score}</Typography>
                      </Grid>
                      </Grid>
                    </Paper>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Leaderboard;
