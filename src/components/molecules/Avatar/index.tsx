import React from 'react';
import styles from './styles';
import clsx from 'classnames';

const Avatar: React.FunctionComponent<React.ImgHTMLAttributes<HTMLImageElement>> = ({
  children,
  className,
  ...props
}) => {
  const stylesClass = styles();
  const rootClass = clsx(stylesClass.root, className);
  return <img className={rootClass} {...props} />;
};

export default Avatar;
