import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default BodyColumns = () => (
  <div>
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Paper className={classes.paper}>xs=8</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>xs=4</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>xs=12</Paper>
      </Grid>
    </Grid>
  </div>
);
