import { makeStyles, withStyles } from '@material-ui/core';
import { Button as BaseButton, ButtonClassKey } from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      minHeight: '36px',
      padding: '5px',
      borderRadius: '0',
      color: theme.colors.white,
      letterSpacing: 'normal',
      boxSizing: 'border-box',
      fontFamily: theme.font.secondary,
    },
  };
});

export const StyledButton = withStyles(theme => {
  return {
    root: {
      fontSize: 'inherit',
      textTransform: 'none',
      textAlign: 'inherit',
      lineHeight: 'inherit',
      fontFamily: theme.font.secondary,
      '&:hover': {
        backgroundColor: theme.colors.gray,
      },
    },
    label: {},
  };
})(BaseButton);

export default useStyles;
