import { ReactNode } from 'react';
import { Sidebar } from './styled';

interface IProps {
  children: ReactNode;
}

const LayoutSideBar = ({ children }: IProps) => {
  return <Sidebar>{children}</Sidebar>;
};

export default LayoutSideBar;
