import { makeStyles, Theme } from '@material-ui/core';

export interface ContainerStylesProps {
  minWidth?: string;
}

const styles = makeStyles<Theme, ContainerStylesProps>(theme => {
  return {
    containerRoot: {
      width: '100%',
      position: 'relative',
      minWidth: ({ minWidth = '' }): string => `${minWidth}`,
      [theme.breakpoints.only('md')]: {
        width: `900px`,
      },
      [theme.breakpoints.up('lg')]: {
        width: `1200px`,
      },
    },
    responsiveContainerRoot: {
      width: '100%',
      position: 'relative',
      [theme.breakpoints.only('md')]: {
        width: `900px`,
      },
      [theme.breakpoints.up('lg')]: {
        width: `1200px`,
      },
    },
  };
});

export default styles;
