import CountryForSidebar from '../countryForSidebar/CountryForSidebar';
import StatisticsForSidebar from '../StatisticsForSidebar/StatisticsForSidebar';
import { Wrapper } from './styled';
import { Dropdown } from '../Dropdown/Dropdown';

const Sidebar = () => {
  return (
    <Wrapper>
      <CountryForSidebar />
      <StatisticsForSidebar />
    </Wrapper>
  );
};

export default Sidebar;
