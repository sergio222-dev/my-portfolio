import React, { FunctionComponent } from 'react';
import Molecule from '../_interfaces';
import Button, { Props as ButtonProps } from '../../atoms/Button/';
import Typography from '../../atoms/Typography';
import { useTheme } from '@material-ui/core';

export type AtomStyles = 'button' | 'typography';
export type Props = Molecule<AtomStyles> & ButtonProps;

const ButtonTypes: FunctionComponent<Props> = ({ children, classes, ...props }) => {
  const { colors } = useTheme();
  const { button, typography } = classes || {};
  return (
    <Button {...props} className={button}>
      <Typography className={typography} color={colors.yellow}>
        {children}
      </Typography>
    </Button>
  );
};

export default ButtonTypes;
