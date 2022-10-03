import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContainerNavBar from './components/container/ContainerNavBar';
import Context from './context/Context';
import Donate from './pages/Donate';
import FormPages from './pages/FormPages';
import Home from './pages/Home';
import NeedHelp from './pages/NeedHelp';

function App() {
  return (
    <Context>
      <Router>
        <ContainerNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="forms" element={<FormPages />} />
          <Route path="donate" element={<Donate />} />
          <Route path="recibirAyuda" element={<NeedHelp />} />
        </Routes>
      </Router>
    </Context>
  );
}

export default App;
