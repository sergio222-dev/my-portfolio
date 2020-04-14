import React, { FunctionComponent } from 'react';
import TitleTypo from '../Typography/TitleTypo';
import { Grid } from '@material-ui/core';
import IconAvatar from '../IconAvatar';
import { GitHub, Web } from '@material-ui/icons';

const ProjectFooter: FunctionComponent = ({ children }) => {
  return (
    <Grid container alignItems={'center'}>
      <Grid item xs={8}>
        <TitleTypo>{children}</TitleTypo>
      </Grid>
      <Grid item xs={2}>
        <IconAvatar href={'#'} size={30}>
          <GitHub />
        </IconAvatar>
      </Grid>
      <Grid item xs={2}>
        <IconAvatar href={'#'} size={30}>
          <Web />
        </IconAvatar>
      </Grid>
    </Grid>
  );
};

export default ProjectFooter;
