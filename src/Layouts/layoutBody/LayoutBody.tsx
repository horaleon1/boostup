import React from 'react';
import { Body } from './styled';
import { IReactNode } from '../../types/shared';

const LayoutBody = ({ children }: IReactNode) => {
  return <Body>{children}</Body>;
};

export default LayoutBody;
