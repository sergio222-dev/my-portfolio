import React from 'react';
import createSlot, { useScope } from 'slottr';
import styles from './styles';
export const NavbarHeader = createSlot('div');
export const BodyTemplate = createSlot('div');

const BaseTemplate: React.FunctionComponent = ({ children }) => {
  const scope = useScope(children);
  const stylesClass = styles();
  return (
    <>
      {/*<div className={stylesClass.navbarHeader}>*/}
      {/*  <NavbarHeader.Slot scope={scope} props={{ className: stylesClass.root }} />*/}
      {/*</div>*/}
      <BodyTemplate.Slot scope={scope} props={{ className: stylesClass.body }} />
    </>
  );
};

export default BaseTemplate;
