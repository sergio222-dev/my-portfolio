import { makeStyles, Theme } from '@material-ui/core';

export interface StylesProps {
  size?: number;
}

const styles = makeStyles<Theme, StylesProps>(theme => {
  return {
    IconAvatarRoot: {
      width: ({ size = 40 }) => `${size}px`,
      height: ({ size = 40 }) => `${size}px`,
      borderRadius: '50%',
      backgroundColor: theme.colors.blueWhite,
      color: theme.colors.white ,
    },
  };
});

export default styles;
