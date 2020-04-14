import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => {
  return {
    ProjectPageTemplateBoxRoot: {
      flexDirection: 'column',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
      },
    },
  };
});

export default styles;