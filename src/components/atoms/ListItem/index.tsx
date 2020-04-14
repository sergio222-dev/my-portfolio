import React from 'react';
import Atom from '../_interfaces';
import useStyles, { StyledButton } from './styles';
import clsx from 'classnames';

interface ListItemProps extends Atom {
  button?: boolean;
}

const ListItem: React.FunctionComponent<ListItemProps> = ({ children, className, button = false }) => {
  const stylesClass = useStyles();
  const rootClass = clsx(className, stylesClass.root);
  return (
    <>
      {button ? (
        <StyledButton className={rootClass}>{children}</StyledButton>
      ) : (
        <div className={rootClass}>{children}</div>
      )}
    </>
  );
};

export default ListItem;
