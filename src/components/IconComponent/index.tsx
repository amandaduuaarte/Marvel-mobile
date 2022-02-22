import React from 'react';
import { Icon as IconStyled } from './Icon.styles';
import { IconProps } from './Icon.types';

const Icon: React.FC<IconProps> = ({ children, ...props }) => {
  return <IconStyled {...props}>{children}</IconStyled>;
};

export default Icon;