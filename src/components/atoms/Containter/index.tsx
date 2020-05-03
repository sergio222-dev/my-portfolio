import React, { FunctionComponent } from 'react';
import styles from './styles';
import Atom from '../_interfaces';
import clsx from 'classnames';

interface ContainerProps {
  As?: React.ElementType;
  minWidth?: string;
}

export type props = ContainerProps & Atom & ContainerProps;

const Index: FunctionComponent<props> = ({ children, className, As = 'div', minWidth }) => {
  const stylesClasses = styles({ minWidth });
  const rootClassNames = clsx(stylesClasses.containerRoot, className);
  return <As className={rootClassNames}>{children}</As>;
};

export default Index;
