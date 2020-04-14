import React, { FunctionComponent } from 'react';
import SectionTemplate from '../SectionTemplate';
import { useTheme } from '@material-ui/core';
import Box from '../../atoms/Box';

const ContactTemplate: FunctionComponent = ({ children }) => {
  const theme = useTheme();
  return <SectionTemplate color={theme.colors.blueSecondary}>{children}</SectionTemplate>;
};

export default ContactTemplate;
