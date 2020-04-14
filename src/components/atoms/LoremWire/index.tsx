import React from 'react';
import styles, { StylesProps } from './styles';

const LoremWire: React.FunctionComponent<StylesProps> = ({ height, color }) => {
  const stylesClass = styles({ height, color });
  return <div className={stylesClass.root}></div>;
};

export default LoremWire;
