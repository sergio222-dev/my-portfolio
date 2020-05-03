import { makeStyles, Theme } from '@material-ui/core';

export type classNames = 'toggleButtonActive' | 'toggleButton';

const styles = makeStyles<Theme, {}, classNames>(theme => {
  return {
    toggleButton: {
      '&:not(:first-child):not(:last-child)': {
        borderRight: 'none',
        borderLeft: 'none',
        borderRadius: '0',
      },
      '&:first-child': {
        borderRight: 'none',
        borderBottomRightRadius: '0',
        borderTopRightRadius: '0',
      },
      '&:last-child': {
        borderLeft: 'none',
        borderBottomLeftRadius: '0',
        borderTopLeftRadius: '0',
      },
    },
    toggleButtonActive: {
      backgroundColor: theme.colors.gray,
    },
  };
});

export default styles;
