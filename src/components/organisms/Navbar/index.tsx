import React from 'react';
import styles from './styles';
import { Grid } from '@material-ui/core';
import createSlot, { useScope } from 'slottr';

export const TitleNavbar = createSlot(Grid);
export const MenuSection = createSlot(Grid);

const Navbar: React.FunctionComponent<{}> = ({ children }) => {
  const stylesClass = styles();
  const scope = useScope(children);

  return (
    <div className={stylesClass.navbarRoot}>
      <Grid container style={{ padding: '0 2em' }}>
        <TitleNavbar.Slot scope={scope} props={{ item: true, xs: 4 }} />
        <MenuSection.Slot scope={scope} props={{ item: true, xs: 8 }} />
      </Grid>
    </div>
  );
};

export default Navbar;
