import React, { FunctionComponent } from 'react';
import Atom from '../_interfaces';

interface OwnProps extends Atom {}

type Props = OwnProps;

const ButtonImage: FunctionComponent<Props> = ({ children }) => {
  return <button>{children}</button>;
};

export default ButtonImage;
