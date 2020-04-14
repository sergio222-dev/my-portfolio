import React from 'react';
import styles, { BoxStylesProps } from './styles';
import Atom from '../_interfaces';
import clsx from 'classnames';

interface BoxProps {
  htmlDivProps?: React.HTMLAttributes<HTMLDivElement>;
}

type Props = BoxProps & Atom & BoxStylesProps;

const Box: React.FunctionComponent<Props> = ({ children, className, htmlDivProps, ...props }) => {
  const stylesClass = styles({ ...props });
  const rootClassname = clsx(className, stylesClass.boxRoot);
  return (
    <div className={rootClassname} {...htmlDivProps}>
      {children}
    </div>
  );
};

export default Box;
