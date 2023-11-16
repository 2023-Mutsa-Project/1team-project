import React from 'react';
import './App.css';
import "./index.css";
import Main from './Main';
import Search from './Search';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/search" element={<Search/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;