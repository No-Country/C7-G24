import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContainerNavBar from './components/container/ContainerNavBar';
import Context from './context/Context';
import Donate from './pages/Donate';
import FormPages from './pages/FormPages';
import Home from './pages/Home';
import NeedHelp from './pages/NeedHelp';
import News from './pages/News';
import ThoseWhoParticipate from './pages/ThoseWhoParticipate';

function App() {
  return (
    <Context>
      <Router>
        <ContainerNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="thosewhoparticipate" element={<ThoseWhoParticipate />} />
          <Route path="news" element={<News />} />
          <Route path="forms" element={<FormPages />} />
          <Route path="donate" element={<Donate />} />
          <Route path="recibirAyuda" element={<NeedHelp />} />
        </Routes>
      </Router>
    </Context>
  );
}

export default App;
