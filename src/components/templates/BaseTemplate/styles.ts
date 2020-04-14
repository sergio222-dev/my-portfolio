import { makeStyles, darken } from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return {
    root: {},
    navbarHeader: {
      position: 'fixed',
      background: `${darken(theme.colors.blue, 0.5)}`,
    },
    body: {
      boxSizing: 'border-box',
      backgroundColor: theme.colors.blue,
      fontSize: '12px',
      fontFamily: `${theme.font.secondary}, san-serif`,
      [theme.breakpoints.only('md')]: {
        fontSize: '16px',
      },
      [theme.breakpoints.only('sm')]: {
        fontSize: '14px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '18px',
      },
      '& a': {
        color: theme.colors.blueWhite,
      },
    },
  };
});

export default useStyles;
