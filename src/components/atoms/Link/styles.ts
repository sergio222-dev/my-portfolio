import { makeStyles, Theme } from '@material-ui/core';

export type LinkClasses = 'root';

const useStyles = makeStyles<Theme, {}, LinkClasses>(theme => {
  return {
    root: {
      textDecoration: 'none',
      cursor: 'pointer',
      userSelect: 'none',
      color: theme.colors.blueWhite,
      '&:hover': {
        color: 'white',
      },
    },
  };
});

export default useStyles;
