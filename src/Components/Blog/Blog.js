import { Typography } from "@mui/material";
import React from "react";
import "./Blog.css";
import Grid from "@mui/material/Grid";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import VideocamIcon from "@mui/icons-material/Videocam";
import Logo3 from "../../assets/Yawn3.png";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <img src={Logo3} alt="" />
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography>Sleep Meditation</Typography>
              </Grid>
              <Grid item>
                <Typography>Best sleep practices</Typography>
              </Grid>
              <Grid item>
                <img
                  className="blogimage"
                  src="https://images.unsplash.com/photo-1495197359483-d092478c170a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
                ></img>
              </Grid>
              <Grid item>
                <HeadphonesIcon></HeadphonesIcon>
                <VideocamIcon></VideocamIcon>
              </Grid>
              <Grid item>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia autem commodi laboriosam facilis ex praesentium
                  excepturi. Voluptatum magnam odit vitae. Facere ratione,
                  assumenda illum cupiditate sequi magni sit amet voluptatum.
                  
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Blog;
