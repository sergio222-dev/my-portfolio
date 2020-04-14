import React from 'react';
import styles, { StyledButton, ButtonsVariant } from './styles';
import clsx from 'classnames';
import { ButtonProps as MaterialButtonProps } from '@material-ui/core';
import Atom from '../_interfaces';

interface ButtonProps extends Atom {
  variants?: ButtonsVariant;
}

const Button: React.FunctionComponent<MaterialButtonProps & ButtonProps> = ({
  children,
  variants = 'square',
  classes,
  className,
  ...props
}) => {
  const stylesClass = styles({});
  const rootClass = clsx(className, stylesClass[variants], classes ? classes.root : false);
  return (
    <StyledButton classes={{ root: rootClass, ...classes }} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
