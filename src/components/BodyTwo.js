import React from 'react';

import { Grid, Typography, Button } from '@mui/material';
import { ArrowForwardIos } from '@material-ui/icons';

import Card from '../utilities/Card';
import NoImage from '../assets/no-img.png';
import bodyTwoStyles from './styles/BodyTwo';

const BodyTwo = () => {
  const classes = bodyTwoStyles();

  const typoG = {
    display: { xs: 'none', lg: 'block' },
    marginTop: '3.5rem',
    marginBottom: '1.5rem',
  };

  const btnX = {
    height: '2rem',
    display: 'flex',
    marginTop: '0.5rem',
    width: { xs: '19rem', lg: '12.3rem' },
    justifyContent: { xs: 'center', lg: 'space-between' },
  };

  const submitBtnX = {
    backgroundColor: 'orange',
    display: 'flex',
    width: { xs: '21.5rem', lg: '12.3rem' },
    justifyContent: { xs: 'center', lg: 'space-between' },
    marginTop: { xs: '0rem', lg: '3rem' },
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={2}></Grid>
        <Grid item lg={8} xs={12} style={{ paddingTop: '0' }}>
          <Typography variant='h6' className={classes.typog} sx={typoG}>
            <b>Lorem Ipsum lorem ipsum</b>
          </Typography>
          <div className={classes.cardsContainer}>
            <Card className={classes.cardItems}>
              <Typography fontSize={12}>
                <b>LOREM IPSUM</b>
              </Typography>
              <Typography fontSize={12} style={{ marginBottom: '0.5rem' }}>
                EXAMPLE TEXT
              </Typography>
              <img src={NoImage} alt='img' width='90%' height='50%' />
              <Button variant='contained' className={classes.btn} sx={btnX}>
                <span className={classes.loremText}>LOREM IPSUM</span> <ArrowForwardIos fontSize='small' />
              </Button>
            </Card>
            <Card className={classes.cardItems}>
              <Typography fontSize={12}>
                <b>LOREM IPSUM</b>
              </Typography>
              <Typography fontSize={12} style={{ marginBottom: '0.5rem' }}>
                EXAMPLE TEXT
              </Typography>
              <img src={NoImage} alt='img' width='90%' height='50%' />
              <Button variant='contained' className={classes.btn} sx={btnX}>
                <span className={classes.loremText}>LOREM IPSUM</span> <ArrowForwardIos fontSize='small' />
              </Button>
            </Card>
            <Card className={classes.cardItems}>
              <Typography fontSize={12}>
                <b>LOREM IPSUM</b>
              </Typography>
              <Typography fontSize={12} style={{ marginBottom: '0.5rem' }}>
                EXAMPLE TEXT
              </Typography>
              <img src={NoImage} alt='img' width='90%' height='50%' />
              <Button variant='contained' className={classes.btn} sx={btnX}>
                <span className={classes.loremText}>LOREM IPSUM</span> <ArrowForwardIos fontSize='small' />
              </Button>
            </Card>
            <Card className={classes.cardItems}>
              <Typography fontSize={12}>
                <b>LOREM IPSUM</b>
              </Typography>
              <Typography fontSize={12} style={{ marginBottom: '0.5rem' }}>
                EXAMPLE TEXT
              </Typography>
              <img src={NoImage} alt='img' width='90%' height='50%' />
              <Button variant='contained' className={classes.btn} sx={btnX}>
                <span className={classes.loremText}>LOREM IPSUM</span>
                <ArrowForwardIos fontSize='small' />
              </Button>
            </Card>
          </div>
          <div className={classes.submitSection}>
            <Button variant='contained' className={classes.submitButton} sx={submitBtnX}>
              <span className={classes.loremText}>
                <b>LOREM IPSUM </b>
              </span>{' '}
              <ArrowForwardIos fontSize='small' />
            </Button>
          </div>
        </Grid>
        <Grid item lg={2} className={classes.lastGrid}></Grid>
      </Grid>
    </div>
  );
};

export default BodyTwo;
