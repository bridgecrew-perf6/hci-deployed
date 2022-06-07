import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./game.css";
import Logo3 from "../../assets/Yawn3.png";

import Swiggy from "../../assets/swiggy.png";
import Uber from "../../assets/uber.png";
import Zomato from "../../assets/zomato.png";
import Lenskart from "../../assets/lenskart.png";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

// export default function CircularStatic() {
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);
// }

const GameOne = () => {
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
            <Grid container direction="column" spacing={2} alignItems="center">
              <Grid item>
                <Typography sx={{
                    color: "black",
                    fontFamily: "Poppins",
                    textAlign: "center",
                    fontWeight: "400",
                  }}>Today's Sleep</Typography>
                <CircularProgressWithLabel value={50} />
              </Grid>
              <Grid item>
                <Typography sx={{
                    color: "black",
                    fontFamily: "Poppins",
                    textAlign: "center",
                    fontWeight: "400",
                  }}>Weekly Sleep</Typography>
                <CircularProgressWithLabel value={60} />
              </Grid>
              <Grid item>
                <Typography sx={{
                    color: "black",
                    fontFamily: "Poppins",
                    textAlign: "center",
                    fontWeight: "400",
                  }}>Weekly Goal</Typography>
                <CircularProgressWithLabel value={75} />
              </Grid>
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
                  Rewards
                </Typography>
              </Grid>
              <Grid item>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <Grid container direction="row" spacing={2}>
                      <Grid item>
                        <img src={Swiggy} alt="" />
                      </Grid>
                      <Grid item>
                        <img src={Zomato} alt="" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="row" spacing={2}>
                      <Grid item>
                        <img src={Uber} alt="" />
                      </Grid>
                      <Grid item>
                        <img src={Lenskart} alt="" />
                      </Grid>
                    </Grid>
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

export default GameOne;
