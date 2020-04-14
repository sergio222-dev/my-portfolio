import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => {
  return {
    containerBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      //maxHeight: '400px',
      [theme.breakpoints.up('lg')]: {
        //maxHeight: '800px',
      },
      [theme.breakpoints.only('md')]: {
        //maxHeight: '600px',
      },
    },
  };
});

export default styles;
