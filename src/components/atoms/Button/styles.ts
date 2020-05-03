import { makeStyles, Theme, fade } from '@material-ui/core';

export type ButtonsVariant = 'buttonBase';

const atomStyles = makeStyles<Theme, {}, ButtonsVariant>(theme => {
  return {
    buttonBase: {
      backgroundColor: 'transparent',
      border: `${fade(theme.colors.white, 0.1)} solid 1px`,
      // border: 'none',
      borderRadius: '0.1em',
      cursor: 'pointer',
      padding: '0 2em',
      '&:focus': {
        outlineColor: 'transparent',
      },
      '&:hover': {
        backgroundColor: fade(theme.colors.gray, 0.2),
      },
      '&:active': {
        backgroundColor: fade(theme.colors.gray, 0.5),
      },
    },
  };
});

export default atomStyles;
