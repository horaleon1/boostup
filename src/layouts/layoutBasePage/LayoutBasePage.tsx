import { IReactNode } from '../../types/shared';
import { Wrapper } from './styled';

const LayoutBasePage = ({ children }: IReactNode) => {
  return <Wrapper>{children}</Wrapper>;
};

export default LayoutBasePage;
