import { styled, Theme, makeStyles } from '@material-ui/core';
import ListItem from '../../atoms/ListItem';

type variantType = 'middle' | 'left' | 'right';

export interface SkillBoxStylesProps {
  variant?: variantType;
}

export const useContainerSkillBoxClasses = makeStyles<Theme, SkillBoxStylesProps>(theme => {
  return {
    root: {
      border: 'solid 1px',
      borderColor: theme.colors.blueWhite,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2.5em',
      maxWidth: '400px',
      width: '100%',
      boxSizing: 'border-box',

      [theme.breakpoints.up('lg')]: {
        width: '500px',
      },
      [theme.breakpoints.only('md')]: {
        width: '400px',
      },
      [theme.breakpoints.up('md')]: {
        borderTopLeftRadius: ({ variant = 'middle' }): string => (variant === 'left' ? '10px' : '0'),
        borderTopRightRadius: ({ variant = 'middle' }): string => (variant === 'right' ? '10px' : '0'),
        borderBottomLeftRadius: ({ variant = 'middle' }): string => (variant === 'left' ? '10px' : '0'),
        borderBottomRightRadius: ({ variant = 'middle' }): string => (variant === 'right' ? '10px' : '0'),
      },
      [theme.breakpoints.down('sm')]: {
        '&:first-child': {
          borderRadius: '10px 10px 0 0',
        },
        '&:last-child': {
          borderRadius: '0 0 10px 10px',
        },
      },
    },
  };
});

export const HeaderSection = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em 0',
    justifyContent: 'space-between',
    [theme.breakpoints.up('lg')]: {
      minHeight: '10em',
    },
  };
});

export const LangSection = styled('div')(({ theme }) => {
  return {
    [theme.breakpoints.up('lg')]: {
      minHeight: '200px',
    },
  };
});

export const ToolsSection = styled('div')(({ theme }) => {
  return {};
});

export const StyledListItem = styled(ListItem)(({ theme }) => {
  return {
    perspective: '100px',
    justifyContent: 'center',
    minHeight: 'auto',
  };
});
