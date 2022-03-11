import React from 'react';

import { Grid, Typography, Link, Divider } from '@mui/material';

import FooterStyles from './styles/Footer';

const Footer = () => {
  const classes = FooterStyles();

  return (
    <div className={classes.mainContainer}>
      <Grid container>
        <Grid item lg={2}></Grid>

        <Grid item lg={4} xs={12}>
          <div className={classes.linksContainer}>
            <Link href='#' color='inherit' underline='hover'>
              <Typography>Link 1</Typography>
            </Link>
            <span className={classes.dot}>&#8226;</span>
            <Link href='#' color='inherit' underline='hover'>
              <Typography>Link 2</Typography>
            </Link>
            <span className={classes.dot}>&#8226;</span>
            <Link href='#' color='inherit' underline='hover'>
              <Typography sx={{ marginRight: { xs: '0', lg: '4rem' } }}>Link 3</Typography>
            </Link>
          </div>
          <Divider light={true} className={classes.divider} style={{ background: 'gray' }} />
        </Grid>
        <Grid item lg={4} xs={12}>
          <div className={classes.linksContainer}>
            <Link href='#' color='inherit' underline='hover'>
              <Typography sx={{ marginLeft: { xs: '0', lg: '4rem' } }}>Link 4</Typography>
            </Link>
            <span className={classes.dot}>&#8226;</span>
            <Link href='#' color='inherit' underline='hover'>
              <Typography>Link 5</Typography>
            </Link>
            <span className={classes.dot}>&#8226;</span>
            <Link href='#' color='inherit' underline='hover'>
              <Typography>Link 6</Typography>
            </Link>
          </div>
          <Divider light={false} className={classes.divider} style={{ background: 'gray' }} />
        </Grid>

        <Grid container item xs={12}>
          <div className={classes.textContainer}>
            <Typography fontSize={13}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at nibh fermentum, sollicitudin massa in,
              fermentum sem. Sed lectus lorem, varius vel iaculis sit amet, molestie eget orci. Vivamus nulla nibh,
              viverra a mi et, efficitur ultricies libero. Phasellus iaculis libero eget varius semper. Quisque sit amet
              urna tristique, bibendum ligula eu, vulputate dui. Mauris a ligula dignissim, commodo leo nec, tristique
              odio.
            </Typography>
          </div>
        </Grid>

        <Grid item lg={2}></Grid>
      </Grid>
    </div>
  );
};

export default Footer;
