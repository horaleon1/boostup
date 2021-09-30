import { Counter } from './features/counter/Counter';
import Header from './features/header/Header';
import LayoutBasePage from './layouts/layoutBasePage/LayoutBasePage';
import LayoutBody from './layouts/layoutBody/LayoutBody';
import LayoutMain from './layouts/layoutMain/LayoutMain';
import LayoutSideBar from './layouts/layoutSidebar/LayoutSidebar';
import Sidebar from './features/sidebar/Sidebar';

function App() {
  return (
    <LayoutBasePage>
      <Header />
      <LayoutBody>
        <LayoutSideBar>
          <Sidebar />
        </LayoutSideBar>
        <LayoutMain>
          <Counter />
        </LayoutMain>
      </LayoutBody>
    </LayoutBasePage>
  );
}

export default App;
