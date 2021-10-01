import { IReactNode } from '../../types/shared';
import { Sidebar, Wrapper } from './styled';

import { Dropdown } from '../../features/Dropdown/Dropdown';

const LayoutSideBar = ({ children }: IReactNode) => {
  return (
    <Wrapper>
      <Dropdown />
      <Sidebar>{children}</Sidebar>
    </Wrapper>
  );
};

export default LayoutSideBar;
