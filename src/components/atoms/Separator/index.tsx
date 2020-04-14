import React from 'react';
import styles, { StylesProps } from './styles';

const Separator: React.FunctionComponent<StylesProps> = props => {
  const classStyles = styles(props);
  return <div className={classStyles.root}></div>;
};

export default Separator;
