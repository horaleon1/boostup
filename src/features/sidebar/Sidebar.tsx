import CountryForSidebar from '../countryForSidebar/CountryForSidebar';
import StatisticsForSidebar from '../StatisticsForSidebar/StatisticsForSidebar';
import { Wrapper } from './styled';

const Sidebar = () => {
  return (
    <Wrapper>
      <CountryForSidebar />
      <StatisticsForSidebar />
    </Wrapper>
  );
};

export default Sidebar;
