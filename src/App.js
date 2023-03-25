import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import SingleCandidatePage from './pages/SingleCandidatePage';
function App() {
    return (<BrowserRouter>
        
        <Routes>
          < Route path='/' element={<MainPage/>} />
          <Route path='/singleuser:id' element={<SingleCandidatePage />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
    </BrowserRouter>);
}

export default App;
