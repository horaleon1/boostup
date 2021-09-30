import { Img, Title, TitleItem, Wrapper } from './styled';
import UsFlag from '../../images/us--flag.png';

const CountryForSidebar = () => {
  return (
    <Wrapper>
      <Img src={UsFlag} alt='United States' loading='lazy' />
      <Title>
        Country: <TitleItem>United States</TitleItem>
      </Title>
    </Wrapper>
  );
};

export default CountryForSidebar;
