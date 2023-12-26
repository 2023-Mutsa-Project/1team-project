import React from 'react';
import './App.css';
import "./index.css";
import Main from './Main';
import Search from './Search';
import DetailSearch from './DetailSearch';

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
        <Route path="/detail" element={<DetailSearch/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;