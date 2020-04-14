import React from 'react';
import Atom from '../_interfaces';
import clsx from 'classnames';
import styles from './styles';

const List: React.FunctionComponent<Atom> = ({ children, className}) => {
  const stylesClass = styles();
  const rootClass = clsx(stylesClass.root, className);
  return <div className={rootClass}>{children}</div>;
};

export default List;
