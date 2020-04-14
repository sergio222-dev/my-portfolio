import React, { FunctionComponent } from 'react';
import Typography from '../../atoms/Typography';
import { useTheme } from '@material-ui/core';

const TextTypo: FunctionComponent = ({ children }) => {
  const theme = useTheme();
  return <Typography font={theme.font.secondary}>{children}</Typography>;
};

export default TextTypo;
