import { Counter } from './features/counter/Counter';
import LayoutBasePage from './Layouts/LayoutBasePage/LayoutBasePage';
import LayoutMain from './Layouts/LayoutMain/LayoutMain';
import LayoutSideBar from './Layouts/LayoutSidebar/LayoutSidebar';

function App() {
  return (
    <LayoutBasePage>
      <LayoutSideBar>Sidebar</LayoutSideBar>
      <LayoutMain>
        <Counter />
      </LayoutMain>
    </LayoutBasePage>
  );
}

export default App;
