"use client";
import React from 'react';
import Navbar from'./comp/Navbar';
import './Main.css';
import subtitleImg from './img/mainsubtitle.png'


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
        <div className="pick-container">
            <img src={subtitleImg} alt="Main Subtitle" className='subtitleImg'/>
            <div className="subtxt">
                <p>슬림타임이 추천하는 다이어트 보조제 Top 10을 만나보세요. </p>
                <p>슬림타이머들이 남긴 평점 및 리뷰 기반으로 추천해드립니다.</p>
            </div>
        </div>
    </div>
  );
}

export default Main;