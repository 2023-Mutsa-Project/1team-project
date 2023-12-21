"use client";
import React from 'react';
import Navbar from'./comp/Navbar';
import ReviewCard from'./comp/Reviewcard';
import './Search.css';
import Footer from'./comp/footer';

function Search() {
    return (
      <div className="container">
        <div className="search-container">
          <form>
            <div className="search-section">
                <input
                    type="text"
                    id="search"
                    className="input"
                    placeholder="원하는 다이어트 보조제를 검색해보세요."
                    required
                />
    
              <button
                type="submit"
                className="button"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
function Main() {
  return (
    <div>
        <div className="main-container">
            <Navbar />
            <Search />
        </div>
        <div className="data-container">
            <div className="filter-container">
              <div className="filter-btn">
                <p>리뷰 많은 순</p>
              </div>
              <div className="filter-btn">
                <p>높은 평점 순</p>
              </div>
              <div className="filter-btn">
                <p>낮은 가격 순</p>
              </div>
            </div>
            <div className="price-container">
              <div className="price-btn">
              <div className="price-btn1">
                <p>2만 5천원 이하</p>
              </div>
              <div className="section">
                <p>ㅣ</p>
              </div>
              <div className="price-btn2">
                <p>2만 5천원~5만원</p>
              </div>
              <div className="section">
                <p>ㅣ</p>
              </div>
              <div className="price-btn3">
                <p>5만원 이상</p>
              </div>
              </div>
            </div>
            <div className="card-container" style={{ display: 'flex', gap: '45px' }}>
                
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
            </div>
        </div>
        <div className='footer-container'>
            <Footer/>
        </div>
    </div>
  );
}

export default Main;