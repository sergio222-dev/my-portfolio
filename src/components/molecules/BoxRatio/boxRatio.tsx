import React, { FunctionComponent } from 'react';
import styles, { BoxRatioStylesProps, classKeys } from './styles';
import Molecule from '../_interfaces';
import clsx from 'classnames';

type Props = BoxRatioStylesProps & Molecule<classKeys>;

const BoxRatio: FunctionComponent<Props> = ({ children, classes, ...props }) => {
  const stylesClass = styles({ ...props });
  const boxClassName = clsx(stylesClass.box, classes ? classes.box : false);
  const containerClassName = clsx(stylesClass.container, classes ? classes.container : false);
  return (
    <div className={boxClassName}>
      <div className={containerClassName}>{children}</div>
    </div>
  );
};

export default BoxRatio;
