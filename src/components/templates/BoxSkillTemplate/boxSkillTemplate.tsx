import React, { FunctionComponent } from 'react';
import createSlot, { useScope } from 'slottr';
import styles from './styles';

export const HeaderSkillBox = createSlot(React.Fragment);
export const LangSkillBox = createSlot(React.Fragment);
export const ToolsSkillBox = createSlot(React.Fragment);

const BoxSkillTemplate: FunctionComponent = ({ children }) => {
  const stylesClass = styles();
  return <>{children && React.Children.map(children, child => <div className={stylesClass.box}>{child}</div>)}</>;
};

export default BoxSkillTemplate;
