import { makeStyles } from '@mui/styles';

const bodyTwoStyles = makeStyles((theme) => ({
  typog: {
    marginTop: '3.5rem',
    marginBottom: '1.5rem',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  cardsContainer: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      backgroundColor: '#063970',
    },
  },
  cardItems: {
    display: 'flex',

    margin: '10px 0px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      minWidth: '340px',
    },
  },
  btn: {
    width: '12.3rem',
    height: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '0.5rem',
    [theme.breakpoints.down('md')]: {
      width: '19rem',
      justifyContent: 'center',
    },
  },
  loremText: {
    marginLeft: '1.45rem',
    [theme.breakpoints.down('md')]: {
      marginRight: '1.45rem',
      marginLeft: '0',
    },
  },
  submitSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      backgroundColor: '#063970',
      height: '80px',
    },
  },
  submitButton: {
    backgroundColor: 'orange',
    display: 'flex',
    justifyContent: 'space-between',
    width: '12.3rem',
    marginTop: '3rem',
    '&:hover': {
      backgroundColor: '#ff8243',
    },
    [theme.breakpoints.down('md')]: {
      width: '21.5rem',
      justifyContent: 'center',
      marginTop: '0rem',
    },
  },
  lastGrid: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

export default bodyTwoStyles;
