import React from 'react';
import Typography from './index';
import { useTheme } from '@material-ui/core';

type variantType = 'small' | 'medium' | 'big';

interface TitleTypoProps {
  variant?: variantType;
  color?: string;
}

type props = TitleTypoProps;

const TitleTypo: React.FunctionComponent<TitleTypoProps> = ({ children, variant = 'small', color }) => {
  const theme = useTheme();
  return (
    <Typography
      font={theme.font.links}
      fontSize={variant === 'big' ? '3em' : variant === 'medium' ? '2em' : '1.5em'}
      color={color || theme.colors.yellow}
      variant={'h1'}
    >
      {children}
    </Typography>
  );
};

export default TitleTypo;
