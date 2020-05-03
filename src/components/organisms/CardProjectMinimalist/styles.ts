import { makeStyles, Theme } from '@material-ui/core';

export interface StylesProps {
  img: string;
}

type classListType = 'rootContainer' | 'imageFigure' | 'caption' | 'title' | 'text';

const styles = makeStyles<Theme, StylesProps, classListType>(theme => {
  return {
    rootContainer: {
      width: '100%',
      maxWidth: '350px',
      height: '100%',
      maxHeight: '350px',
      position: 'relative',
      overflow: 'hidden',
      border: `solid 2px ${theme.colors.yellow}`,
      margin: '1em 0',
      [theme.breakpoints.only('sm')]: {
        width: '350px',
        height: '350px',
      },
      [theme.breakpoints.up('md')]: {
        width: '400px',
        height: '400px',
      },
    },
    imageFigure: {
      width: '120%',
      height: '100%',
      opacity: '0.5',
    },
    caption: {
      position: 'absolute',
      display: 'flex',
      alignContent: 'flex-start',
      justifyContent: 'center',
      top: '0',
      left: '0',
      padding: '0.7em',
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
    },
    title: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      backgroundColor: theme.colors.blue,
      boxSizing: 'border-box',
      //transform: 'translate(0,200%)',
      //transition: 'ease-in transform 350ms',
    },
    text: {
      width: '100%',
      textOverflow: 'ellipsis',
    },
  };
});

export default styles;
