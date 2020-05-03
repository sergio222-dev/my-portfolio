import React, { FunctionComponent } from 'react';
import Box from '../../atoms/Box';
import Molecule from '../_interfaces';

interface OwnProps extends Molecule<'container'> {
  handleChange?: (v: any) => void;
  defaultValue?: any;
}
export type Props = OwnProps;
export type ButtonActiveType = {
  value: any;
  setValue: (val: any) => void;
};

const defaultValue: ButtonActiveType = {
  value: '',
  setValue: () => null,
};

export const ButtonActiveContext = React.createContext(defaultValue);

const useValue = (defaultValue: any, handleChange?: (val: any) => void): ButtonActiveType => {
  const [value, setValue] = React.useState(defaultValue);
  const setCurrentValue = React.useCallback(
    (val: any): void => {
      setValue(val);
      if (handleChange) handleChange(val);
    },
    [handleChange],
  );

  return {
    value,
    setValue: setCurrentValue,
  };
};

const ToggleGroup: FunctionComponent<Props> = ({ children, handleChange, defaultValue }) => {
  const valueContext = useValue(defaultValue, handleChange);
  return (
    <Box alignItems={'normal'} width={'auto'}>
      <ButtonActiveContext.Provider value={valueContext}>{children}</ButtonActiveContext.Provider>
    </Box>
  );
};

export default ToggleGroup;
