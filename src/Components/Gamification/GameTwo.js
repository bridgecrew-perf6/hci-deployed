import { Typography } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HotelIcon from "@mui/icons-material/Hotel";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import BedIcon from "@mui/icons-material/Bed";
import LockIcon from "@mui/icons-material/Lock";
import Grid from "@mui/material/Grid";
import Logo3 from "../../assets/Yawn3.png";

const GameTwo = () => {
  return (
    <>
      <div className="game">
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
            <Grid container direction="column" spacing={3} alignItems="center">
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
                  This Week
                </Typography>
              </Grid>
              <Grid item>
                <Grid container direction="row" spacing={5}>
                  <Grid item>
                    <FavoriteIcon sx={{ color: "red" }}></FavoriteIcon>
                    <Typography>Mon</Typography>
                  </Grid>
                  <Grid item>
                    <FavoriteIcon sx={{ color: "red" }}></FavoriteIcon>
                    <Typography>Tue</Typography>
                  </Grid>
                  <Grid item>
                    <FavoriteIcon sx={{ color: "red" }}></FavoriteIcon>
                    <Typography>Wed</Typography>
                  </Grid>
                  <Grid item>
                    <FavoriteIcon sx={{ opacity: 0.5 }}></FavoriteIcon>
                    <Typography>Thu</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="row" spacing={5}>
                  <Grid item>
                    <FavoriteIcon sx={{ opacity: 0.5 }}></FavoriteIcon>
                    <Typography>Fri</Typography>
                  </Grid>
                  <Grid item>
                    <FavoriteIcon sx={{ opacity: 0.5 }}></FavoriteIcon>
                    <Typography>Sat</Typography>
                  </Grid>
                  <Grid item>
                    <FavoriteIcon sx={{ opacity: 0.5 }}></FavoriteIcon>
                    <Typography>Sun</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  sx={{
                    color: "black",
                    fontFamily: "Poppins",
                    textAlign: "center",
                    fontWeight: "300",
                  }}
                >
                  You need more 21 hours of sleep to proceed to
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="h2"
                  sx={{
                    color: "black",
                    fontFamily: "Poppins",
                    textAlign: "center",
                    fontWeight: "800",
                  }}
                >
                  Level-4
                </Typography>
              </Grid>
              <Grid item>
                <Grid container direction="row" spacing={3} alignItems="center">
                  <Grid item>
                    <BedIcon></BedIcon>
                    <Typography>Level 1</Typography>
                  </Grid>
                  <Grid item>
                    <BedtimeIcon></BedtimeIcon>
                    <Typography>Level 2</Typography>
                  </Grid>
                  <Grid item>
                    <HotelIcon></HotelIcon>
                    <Typography>Level 3</Typography>
                  </Grid>
                  <Grid item>
                    <LockIcon></LockIcon>
                    <Typography>Level 4</Typography>
                  </Grid>
                  <Grid item>
                    <LockIcon></LockIcon>
                    <Typography>Level 5</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  sx={{
                    color: "black",
                    fontFamily: "Poppins",
                    textAlign: "center",
                    fontWeight: "300",
                  }}
                >
                  Reach Level 10 to receive 500 credits
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default GameTwo;
