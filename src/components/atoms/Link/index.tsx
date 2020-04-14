import React from 'react';
import Atom from '../_interfaces';
import styles from './styles';
import stylesTypography, { StyleProps } from '../Typography/styles';
import clsx from 'classnames';

const Link: React.FunctionComponent<React.AnchorHTMLAttributes<HTMLAnchorElement> & Atom & StyleProps> = ({
  // Link props
  children,
  className,

  // Typography Styles Props
  color,
  weight,
  fontSize,
  type,
  font,

  //BASE HTML Attributes
  ...props
}) => {
  const stylesClass = styles({});
  const typographyClass = stylesTypography({ color, weight, fontSize, type, font });
  const classRoot = clsx(stylesClass.root, className, typographyClass.root);
  return (
    <a className={classRoot} {...props}>
      {children}
    </a>
  );
};

export default Link;
