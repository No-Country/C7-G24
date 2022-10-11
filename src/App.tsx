import React from 'react';
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import ContainerNavBar from './components/container/ContainerNavBar';
import Context from './context/Context';
import Contact from './pages/Contact';
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContainerNavBar from './components/container/ContainerNavBar';
import Context from './context/Context';
>>>>>>> c5998c77fe7204c3ab57d21ebfee16b3c0779acc
import Donate from './pages/Donate';
import FormPages from './pages/FormPages';
import Home from './pages/Home';
import NeedHelp from './pages/NeedHelp';
import News from './pages/News';
import ThoseWhoParticipate from './pages/ThoseWhoParticipate';
<<<<<<< HEAD
import NotFound from './pages/NotFound';
import Gratitude from './pages/Gratitude';
=======
>>>>>>> c5998c77fe7204c3ab57d21ebfee16b3c0779acc

function App() {
  return (
    <Context>
      <Router>
        <ContainerNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
          <Route path="/home" element={<Home />} />
          <Route
            path="/thosewhoparticipate"
            element={<ThoseWhoParticipate />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/forms" element={<FormPages />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/recibirAyuda" element={<NeedHelp />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="not-found" />} />
          <Route path="/gratitude" element={<Gratitude />} />
=======
          <Route path="home" element={<Home />} />
          <Route path="thosewhoparticipate" element={<ThoseWhoParticipate />} />
          <Route path="news" element={<News />} />
          <Route path="forms" element={<FormPages />} />
          <Route path="donate" element={<Donate />} />
          <Route path="recibirAyuda" element={<NeedHelp />} />
>>>>>>> c5998c77fe7204c3ab57d21ebfee16b3c0779acc
        </Routes>
      </Router>
    </Context>
  );
}

export default App;
