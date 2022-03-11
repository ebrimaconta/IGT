import React from 'react';

import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#0077b6',
    height: '110px',
    [theme.breakpoints.down('md')]: {
      height: '140px',
    },
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '110px',
    [theme.breakpoints.down('md')]: {
      height: '140px',
      padding: '0 1rem',
    },
  },
}));

const LittleDescription = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <Grid container>
          <Grid item lg={2}></Grid>
          <Grid item lg={8} xs={12}>
            <div className={classes.textContainer}>
              <Typography color='white' sx={{ fontSize: { xs: '13px', lg: '16px' } }}>
                <b>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo arcu nulla, a tempus risus <br />{' '}
                  fermentum sed. Etiam libero nisi, tincidunt sit amet pharetra at, molestie id quam.
                </b>
              </Typography>
            </div>
          </Grid>
          <Grid item lg={2}></Grid>
        </Grid>
      </div>
      <div style={{ height: '10px', backgroundColor: '#4cc9f0' }}></div>
    </div>
  );
};

export default LittleDescription;
