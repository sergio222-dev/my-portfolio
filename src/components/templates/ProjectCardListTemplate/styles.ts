import { styled } from '@material-ui/core';

export const StyledDiv = styled('div')(({ theme }) => {
  return {
    padding: '3em 0',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  };
});
