import React, { FunctionComponent } from 'react';
import styles, { StylesProps } from './styles';
import Box from '../../atoms/Box';

interface IconAvatarProps {
  href?: string | undefined;
}

const IconAvatar: FunctionComponent<IconAvatarProps & StylesProps> = ({ children, href, size }) => {
  const stylesClass = styles({ size });
  return (
    <Box alignItems={'center'} width={`${size}px`} className={stylesClass.IconAvatarRoot}>
      <a href={href} target={'_blank'} rel="noopener noreferrer" style={{ color: 'inherit', display: 'inline-flex' }}>
        {children}
      </a>
    </Box>
  );
};

export default IconAvatar;
