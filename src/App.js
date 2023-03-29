
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router';
import { SingleCandidate } from './components/SingleCandidate/SingleCandidate';
import { Reports } from './components/Reports/Reports';

function App() {
  return (
    <>
      <div className="App">
        <Header />
          <Routes>
            <Route path={'/'} element={<MainContent/>}/>
            <Route path={'/candidate/:id'} element={<SingleCandidate />} />
            <Route path={'/reports'} element={<Reports />} />
          </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
