import { makeStyles, Theme } from '@material-ui/core';

export interface StylesProps {
  length?: string;
  direction?: 'vertical' | 'horizontal';
  wide?: string;
  color?: string;
}

const useStyles = makeStyles<Theme, StylesProps, 'root'>(theme => {
  return {
    root: {
      height: ({ length = '75%', direction = 'vertical', wide = '0' }): string =>
        `${direction === 'vertical' ? length : wide}`,
      backgroundColor: ({ color = theme.colors.blueWhite }): string => `${color}`,
      border: ({ color = theme.colors.blueWhite }): string => `1px solid ${color}`,
      borderRadius: '15px',
      width: ({ length = '75%', direction = 'vertical', wide = '0' }): string =>
        `${direction === 'vertical' ? wide : length}`,
    },
  };
});

export default useStyles;
