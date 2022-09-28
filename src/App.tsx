import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ContainerNavBar from './components/container/ContainerNavBar';
import Donate from './pages/Donate';
import FormPages from './pages/FormPages';
import Home from './pages/Home';

function App() {
  return (        
  <Router>
    < ContainerNavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route  path="home"  element={<Home/>}/>
            <Route  path="forms"  element={<FormPages/>}/>
            <Route  path="donate"  element={<Donate/>}/>
          </Routes>
        </Router>
    
  );
}

export default App;
