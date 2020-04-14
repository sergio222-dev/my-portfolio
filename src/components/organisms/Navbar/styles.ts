import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return {
    navbarRoot: {
      backgroundColor: theme.colors.blue,
      height: `${theme.navbar.height}`,
      display: 'flex',
      borderBottom: `solid 1px ${theme.colors.white}`,
      width: '100%',
    },
    title: {
      flex: '2',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    menu: {
      flex: '4',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
  };
});

export default useStyles;
