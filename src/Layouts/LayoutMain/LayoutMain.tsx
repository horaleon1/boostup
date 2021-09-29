import { ReactNode } from 'react';
import { Main } from './styled';

interface IProps {
  children: ReactNode;
}

const LayoutMain = ({ children }: IProps) => {
  return <Main>{children}</Main>;
};

export default LayoutMain;
