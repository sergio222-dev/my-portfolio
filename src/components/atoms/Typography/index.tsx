import React from 'react';
import clsx from 'classnames';
import styles, { StyleProps } from './styles';
import Atom from '../_interfaces';

type TypographyVariants = 'h1' | 'h2' | 'h3' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';

interface TypographyProps extends StyleProps {
  title?: boolean;
  variant?: TypographyVariants;
}

const Typography: React.FunctionComponent<TypographyProps & Atom> = ({
  // Main props
  children,
  className, // Atom prop
  title = false,
  variant = 'body1',

  // Styles props
  ...styleProps
}) => {
  const classes = styles(styleProps);
  const classNames = clsx(classes.root, title ? classes.title : false, className);
  switch (variant) {
    case 'body1':
      return <p className={classNames}>{children}</p>;
    case 'body2':
      return <p className={classNames}>{children}</p>;
    case 'h1':
      return <h1 className={classNames}>{children}</h1>;
    case 'h2':
      return <h2 className={classNames}>{children}</h2>;
    case 'h3':
      return <h3 className={classNames}>{children}</h3>;
    case 'h4':
      return <h4 className={classNames}>{children}</h4>;
    case 'h5':
      return <h5 className={classNames}>{children}</h5>;
    case 'h6':
      return <h6 className={classNames}>{children}</h6>;
  }
};

export default Typography;
