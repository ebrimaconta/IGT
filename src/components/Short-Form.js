import React from 'react';

import { Typography, Button, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: '2rem 0',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      margin: '0 0',
    },
  },
  nom: {
    margin: '0 1rem',
    width: '305px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  adresse: {
    marginRight: '1rem',
    width: '305px',
    [theme.breakpoints.down('md')]: {
      width: '222px',
      height: '35px',
      margin: '0px 10px',
    },
  },
  divider: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },

  inputBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
      flexDirecction: 'row',
      marginTop: '0.9rem',
    },
  },
  mainContainer: {
    marginTop: '3rem',
    [theme.breakpoints.down('md')]: {
      margin: '0',
      height: '130px',
    },
  },
  button: {
    [theme.breakpoints.down('md')]: {
      margin: '20px 0px 0px 0px',
    },
  },
  abonnez: {
    color: 'gray',
    marginTop: '0.5rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '22px',
    },
  },
}));

const ShortForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Divider light={true} className={classes.divider} />
      <form>
        <div className={classes.container}>
          <Typography className={classes.abonnez} style={{ marginTop: '0.8rem' }}>
            Abonnez-vous &agrave; notre newsletter
          </Typography>
          <TextField id='outlined-basic' label='Nom' className={classes.nom} variant='filled' />

          <div className={classes.inputBtn}>
            <TextField id='outlined-basic' className={classes.adresse} label='Adresse e-mail' variant='filled' />
            <Button className={classes.button} type='submit' variant='contained'>
              S'ABONNER
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShortForm;
