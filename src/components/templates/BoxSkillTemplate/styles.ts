import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => {
  return {
    box: {
      '&:first-child': {
        display: 'flex',
        alignContent: 'center',
      },
      '&:nth-child(2)': {
        minHeight: '80px',
      },
      [theme.breakpoints.up('lg')]: {
        '&:first-child': {
          minHeight: '120px',
        },
        minHeight: '150px',
      },
      [theme.breakpoints.only('md')]: {
        minHeight: '160px',
      },
    },
  };
});

export default styles;
