import React, { FunctionComponent } from 'react';
import useStyles from './styles';
import { ButtonActiveContext } from '../ToggleGroup';
import ButtonTypes, { Props as ButtonProps } from '../ButtonTypes';
import clsx from 'classnames';
import Molecule from '../_interfaces';

type AtomStyles = 'active';
type OwnProps = Molecule<AtomStyles>;
export type Prop = { value: string | number } & ButtonProps & OwnProps;

const ToggleButton: FunctionComponent<Prop> = ({ children, onClick, ...props }) => {
  const { toggleButtonActive, toggleButton } = useStyles({});
  const { setValue, value: activeValue } = React.useContext(ButtonActiveContext);
  const { button: buttonBase, typography, active } = props.classes || {};
  const button = clsx(buttonBase, toggleButton);
  const activeClass = clsx(button, active, toggleButtonActive);
  return (
    <ButtonTypes
      {...props}
      onClick={e => {
        if (onClick) onClick(e);
        setValue(props.value);
      }}
      classes={{
        button: activeValue === props.value ? activeClass : button,
        typography,
      }}
    >
      {children}
    </ButtonTypes>
  );
};

export default ToggleButton;
