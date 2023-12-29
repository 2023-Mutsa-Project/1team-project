// DetailSearch.js
import React from 'react';
import Navbar from'./comp/Navbar';
import './DetailSearch.css';
import Product from './comp/Product';
import Footer from'./comp/footer';

function DetailSearch() {
  return (
    <div>
      <div className="detail-container">
        <Navbar />
        <Product/>
      </div>
      <div className='customer-rate' style={{ fontSize:'20px'}}>
        <p>고객 리뷰 (10건)</p>
      <div className="rate-detail"> 
      </div>
      </div>
    </div>
  );
}

export default DetailSearch;