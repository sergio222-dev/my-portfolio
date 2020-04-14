import { makeStyles, Theme } from '@material-ui/core';

export interface BoxRatioStylesProps {
  ratio?: string;
}

export type classKeys = 'container' | 'box';

const styles = makeStyles<Theme, BoxRatioStylesProps, classKeys>(() => {
  return {
    container: {
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      position: 'relative',
      width: '100%',
      '&:before': {
        content: '""',
        display: 'block',
        paddingTop: ({ ratio = '100%' }): string => ratio,
      },
    },
  };
});

export default styles;
