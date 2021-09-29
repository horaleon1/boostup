import { ReactNode } from 'react';
import { Wrapper } from './styled';

interface IProps {
  children: ReactNode;
}

const LayoutBasePage = ({ children }: IProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default LayoutBasePage;
