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
  const stylesClass = styles({});
  const classNames = clsx(className, stylesClass.responsiveContainerRoot);
  return <As className={classNames}>{children}</As>;
};

export default Index;
