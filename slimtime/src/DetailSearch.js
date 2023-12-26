// DetailSearch.js
import React from 'react';
import Navbar from'./comp/Navbar';
import './DetailSearch.css';
import Footer from'./comp/footer';

function DetailSearch() {
  return (
    <div>
      <div className="main-container">
        <Navbar />
        <h2> Detial</h2>
        {/* Add your DetailSearch content here */}
        <Footer />
      </div>
    </div>
  );
}

export default DetailSearch;
