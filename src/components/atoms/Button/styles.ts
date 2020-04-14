import { lighten, withStyles, makeStyles, Theme, darken } from '@material-ui/core';
import { Button as BaseButton } from '@material-ui/core';

export type ButtonsVariant = 'rounded' | 'square';

export const StyledButton = withStyles(theme => {
  return {
    root: {
      backgroundColor: `${theme.colors.yellow}`,
      color: `${theme.colors.white}`,
      padding: '5px 20px',
      border: 'none',
      '&:hover': {
        //backgroundColor: lighten(theme.colors.yellow, 0.2),
        background: darken(theme.colors.yellow, 0),
      },
    },
  };
})(BaseButton);

const useStyles = makeStyles<Theme, {}, ButtonsVariant>(theme => {
  return {
    rounded: {
      borderRadius: `50px`,
    },
    square: {
      borderRadius: '0',
    },
  };
});

export default useStyles;
