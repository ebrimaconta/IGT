import React from 'react';

import { Typography, Button } from '@mui/material';
import { ArrowForwardIos } from '@material-ui/icons';
import useStyles from './styles/Body';

const Body = () => {
  const classes = useStyles();

  const btnSX = {
    display: { lg: 'none', xs: 'flex' },
    width: '18rem',
    marginTop: '1.5rem',
    justifyContent: 'space-between',
  };

  const btnLG = {
    display: { lg: 'block', xs: 'none' },
    marginTop: '1.5rem',
    width: '14rem',
  };

  return (
    <div className={classes.container}>
      <div className={classes.twoCardsSection}>
        <div className={classes.cardContainer1}>
          <Typography variant='h5' style={{ marginBottom: '1.5rem' }} sx={{ fontSize: { xs: '16px', lg: '24px' } }}>
            <b>LOREM IPSUM LOREM</b>
          </Typography>
          <Typography variant='body2' sx={{ fontSize: { xs: '10px', lg: '15px' }, padding: '0 12px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan justo ullamcorper, suscipit odio
            nec, finibus nibh. Sed sagittis suscipit mi, quis semper felis tincidunt vel.
          </Typography>
          <Button variant='contained' className={classes.btn} sx={btnLG}>
            Lorem Ipsum
          </Button>
          <Button variant='contained' className={classes.btnSm} sx={btnSX}>
            <span style={{ marginLeft: '4rem' }}>Lorem Ipsum</span> <ArrowForwardIos className={classes.arrow} />
          </Button>
        </div>
        <div className={classes.cardContainer2}>
          <Typography variant='h5' style={{ marginBottom: '1.5rem' }} sx={{ fontSize: { xs: '16px', lg: '24px' } }}>
            <b>LOREM IPSUM LOREM</b>
          </Typography>
          <Typography variant='body2' sx={{ fontSize: { xs: '10px', lg: '15px' }, padding: '0 12px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan justo ullamcorper, suscipit odio
            nec, finibus nibh. Sed sagittis suscipit mi, quis semper felis tincidunt vel.
          </Typography>
          <Button variant='contained' className={classes.btn} sx={btnLG}>
            Lorem Ipsum
          </Button>
          <Button variant='contained' className={classes.btnSm} sx={btnSX}>
            <span style={{ marginLeft: '4rem' }}>Lorem Ipsum</span> <ArrowForwardIos className={classes.arrow} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Body;
