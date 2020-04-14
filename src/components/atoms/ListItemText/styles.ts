import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return {
    root: {
      flex: '4',
      fontFamily: `${theme.font.menu}, san-serif`,
    },
  };
});

export default useStyles;
