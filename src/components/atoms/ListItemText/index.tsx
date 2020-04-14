import React from 'react';
import Atom from '../_interfaces';
import styles from './styles';
import clsx from 'classnames';

const ListItemText: React.FunctionComponent<Atom> = ({ children, className }) => {
  const stylesClass = styles();
  const rootClass = clsx(stylesClass.root, className);
  return <div className={rootClass}>{children}</div>;
};

export default ListItemText;
