import { makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core';
import { AtomStyles } from './index';

const styles = makeStyles<Theme, AtomStyles>(theme => {
  return {
    button: {
      padding: '5px',
    },
    typography: {
      lineHeight: '0',
      margin: '0',
      '&>img': {
        width: '32px',
        verticalAlign: 'baseline',
      },
    },
  };
});

export default styles;
