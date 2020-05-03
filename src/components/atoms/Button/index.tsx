import React, { FunctionComponent, ButtonHTMLAttributes } from 'react';
import clsx from 'classnames';
import styles from './styles';

export type Props = ButtonHTMLAttributes<any>;

const Button: FunctionComponent<Props> = ({ children, className, ...buttonProps }) => {
  const { buttonBase: buttonClass } = styles({});
  return (
    <button {...buttonProps} className={clsx(buttonClass, className)}>
      {children}
    </button>
  );
};

export default Button;
