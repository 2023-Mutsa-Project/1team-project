// DetailSearch.js
import React from 'react';
import Navbar from'./comp/Navbar';
import './DetailSearch.css';
import Product from './comp/Product';
import ReviewBox from './comp/ReviewBox';
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
      </div>
      <div className="review-box"> 
        <ReviewBox/>
      </div>
    </div>
  );
}

export default DetailSearch;