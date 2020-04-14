import { makeStyles, Theme } from '@material-ui/core';

export interface SectionStylesProps {
  color?: string;
}

const styles = makeStyles<Theme, SectionStylesProps>(theme => {
  return {
    sectionTemplateRoot: {
      backgroundColor: ({ color = 'transparent' }): string => color,
    },
    containerResponsive: {
      margin: 'auto',
      padding: theme.webPadding.sectionPadding,
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      boxSizing: 'border-box',
    },
  };
});

export default styles;
