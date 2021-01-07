import React from 'react';

import { Typography, Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import WebIcon from '@material-ui/icons/Web';
import theme from "../../config/theme";

const styles = {
  root: {
    flexGrow: 1
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 84,
    width: 120,
    color: theme.palette.primary
  },
  icon: {
    height: 64,
    width: 64
  }
};

const About = (props) => {
  const { classes } = props;
  return (
    <div id='about'>
      <Typography variant='h4'>
        Tech Weave builds, enhances, and maintains your story, your website.
      </Typography>
      {/* <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify='center'>
            <Grid item>
              <Paper className={classes.paper}>
                <WebIcon className={classes.icon} />
                <Typography>Website Upgrading</Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper />
            </Grid>
            <Grid item>
              <Paper />
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
    </div>
  );
};

export default withStyles(styles)(About);
