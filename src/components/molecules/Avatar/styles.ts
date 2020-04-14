import { makeStyles, Theme } from '@material-ui/core';

const styles = makeStyles<Theme>(theme => {
  return {
    root: {
      borderRadius: '50%',
      [theme.breakpoints.down('sm')]: {
        width: '150px',
      },
      [theme.breakpoints.up('md')]: {
        width: '210px',
      },
    },
  };
});

export default styles;
