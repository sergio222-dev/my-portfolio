import { styled } from '@material-ui/core';
import Typography from '../../atoms/Typography';
import ListItem from '../../atoms/ListItem';

export const TypeBadThings = styled(Typography)(({ theme }) => {
  return {
    justifyContent: 'center',
    minHeight: 'auto',
    transformStyle: 'preserve-3d',
    transform: 'rotateX(40deg)  rotateY(10deg)',
  };
});

export const TypoTitle = styled(Typography)(({ theme }) => {
  return {
    fontWeight: 900,
  };
});

export const TypoSubtitle = styled(Typography)(({ theme }) => {
  return {
    color: theme.colors.yellow,
    fontFamily: theme.font.links,
  };
});

export const StyledListItem = styled(ListItem)(({ theme }) => {
  return {
    perspective: '100px',
    justifyContent: 'center',
    minHeight: 'auto',
  };
});
