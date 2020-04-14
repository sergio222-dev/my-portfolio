import { makeStyles, Theme } from '@material-ui/core';
import svg from '../../../assets/img/002.svg';

export interface StylesProps {
  height?: string;
  color?: string;
}

const styles = makeStyles<Theme, StylesProps>(theme => {
  return {
    root: {
      width: '100%',
      backgroundImage: `url(${svg})`,
      backgroundSize: 'contain',
      height: ({ height = '100%' }): string => `${height}`,
      border: '4px solid black',
      boxSizing: 'border-box',
    },
  };
});

export default styles;
