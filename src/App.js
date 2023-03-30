
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Header } from './components/Header';
import { ReportsHeader } from './components/Reports/ReportsHeader'
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router';
import { SingleCandidate } from './components/SingleCandidate/SingleCandidate';
import { Reports } from './components/Reports/Reports';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [openModal, setOpenModal] = useState(false);

  const headerComponent = {
    '/reports': <ReportsHeader />,
    '/create-report': <ReportsHeader />,
    default: <Header />,
  };

  return (
    <>
      <div className="App">
        {headerComponent[currentPath] || headerComponent.default}
          <Routes>
            <Route path={'/'} element={<MainContent/>}/>
            <Route path={'/candidate/:id'} element={<SingleCandidate openModal={openModal} setOpenModal={setOpenModal} />} />
            <Route path={'/reports'} element={<Reports openModal={openModal} setOpenModal={setOpenModal} />} />
          </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
