import { makeStyles, Theme } from '@material-ui/core';
import { FontWeightProperty, TextAlignProperty } from 'csstype';

/**
 * class list
 */
export type ClassnameList = 'root' | 'title';

export interface StyleProps {
  fontSize?: string;
  color?: string;
  weight?: FontWeightProperty;
  type?: 'primary' | 'secondary';
  font?: string;
  align?: TextAlignProperty;
}

const useStyles = makeStyles<Theme, StyleProps, ClassnameList>(theme => {
  return {
    root: {
      letterSpacing: '0.03em',
      lineHeight: '1.75',
      fontSize: ({ fontSize = 'default' }): string => `${fontSize}`,
      color: ({ color = theme.colors.white }): string => `${color}`,
      fontWeight: ({ weight = 'normal' }): FontWeightProperty => weight,
      fontFamily: ({ type = 'primary', font }): string =>
        `${font ? font : type === 'primary' ? theme.font.normal : theme.font.secondary}, san-serif`,
      textAlign: ({ align = 'center' }): TextAlignProperty => align,
    },
    title: {
      textTransform: 'uppercase',
    },
  };
});

export default useStyles;
