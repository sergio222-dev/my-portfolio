import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => {
  return {
    boxSkill: {
      borderColor: theme.colors.blueWhite,
      border: 'solid 1px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2em 1.5em',
      boxSizing: 'border-box',
    },
    slotOne: {
      borderTopRightRadius: '10px',
      borderTopLeftRadius: '10px',
      maxWidth: '400px',
      width: '100%',
      [theme.breakpoints.up('lg')]: {
        width: '500px',
      },
      [theme.breakpoints.only('md')]: {
        width: '400px',
      },
      [theme.breakpoints.up('md')]: {
        borderBottomLeftRadius: '10px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '0',
      },
    },
    slotTwo: {
      maxWidth: '400px',
      width: '100%',
      borderBottomRightRadius: '10px',
      borderBottomLeftRadius: '10px',
      [theme.breakpoints.up('lg')]: {
        width: '500px',
      },
      [theme.breakpoints.only('md')]: {
        width: '400px',
      },
      [theme.breakpoints.up('md')]: {
        borderBottomRightRadius: '10px',
        borderTopRightRadius: '10px',
        borderBottomLeftRadius: '0',
      },
    },
    container: {
      perspective: '200px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down('sm')]: {
        alignItems: 'center',
      },
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
    },
  };
});

export default styles;
