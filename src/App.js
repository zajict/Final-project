
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <MainContent />
      <Footer />
    </div>
  );
}

export default App;
