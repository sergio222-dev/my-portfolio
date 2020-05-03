import React, { FunctionComponent } from 'react';
import Typography from './index';
import styles from './styles';

const NavbarTypo: FunctionComponent = ({ children }) => {
  const stylesClass = styles({});
  return <Typography className={stylesClass.NavbarTypoRoot}>{children}</Typography>;
};

export default NavbarTypo;
