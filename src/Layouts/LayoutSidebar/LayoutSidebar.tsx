import { IReactNode } from '../../types/shared';
import { Sidebar } from './styled';

const LayoutSideBar = ({ children }: IReactNode) => {
  return <Sidebar>{children}</Sidebar>;
};

export default LayoutSideBar;
