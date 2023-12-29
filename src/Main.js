"use client";
import React from 'react';
import Navbar from'./comp/Navbar';
import ReviewCard from'./comp/Reviewcard';
import './Main.css';
import subtitleImg from './img/mainsubtitle.png'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import bannerImg from './img/banner1.png'
import reviewtitleImg from './img/reviewtitle.png'
import ReviewerCard from'./comp/ReviewerCard';
import Footer from'./comp/footer';
import product1Image from './img/product1.png';
import product2Image from './img/product_2.png';
import product3Image from './img/product_3.png';

const productDataList =[{
  imageSrc: product1Image,
  productName: '분홍이/초록이 35일분',
  rating: '4.21',
  reviewCount: 150,
  hashtags: ['#가르시니아', '#체지방 감소'],
  price: '44,000',
},
{
  imageSrc: product2Image,
  productName: '메타그린 슬림업',
  rating: '4.13',
  reviewCount: 120,
  hashtags: ['#카테킨', '#체지방 감소'],
  price: '44,000',
},
{
  imageSrc: product3Image,
  productName: '속편한 다이어트',
  rating: '4,11',
  reviewCount: 115,
  hashtags: ['#가르시니아', '#분말'],
  price: '55,000',
},
]

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
        
          <div className="pickdesc">
            <div className="pick-txt">
              <img src={subtitleImg} alt="Main Subtitle" className='subtitleImg'/>
            <div className="subtxt">
                <p>슬림타임이 추천하는 다이어트 보조제 Top 3를 만나보세요. </p>
                <p>슬림타이머들이 남긴 평점 및 리뷰 기반으로 추천해드립니다.</p>
            </div>
            </div>
          </div>
            <div className="card-container" style={{ display: 'flex', gap: '45px' }}>
            {productDataList.map((productData, index) => (
          <ReviewCard key={index} productData={productData} />
        ))}
            </div>
      
        <div className="ad-container">
            <div className='challenge-container'>
                <div className='challenge-section'>
                    <p>🔥인기 Diet 챌린지방</p>
                </div>
                <div className="challengetitle">
                    <p>매일 1,000kcal 태우기 챌린지</p>
                </div>
                <div className='challenge-detail'>
                    <div className="count">
                        <PermIdentityIcon></PermIdentityIcon>
                        <p> 100명</p>
                    </div>
                    <div className="arrow">
                        <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                    </div>
                </div>
            </div>
            <div className='oliveyoung-container'>
                <img
                width='770'
                height='310'
                src={bannerImg}
                alt="ad"
                />
                <div className="oliveyoung-txt">
                    <p>올리브영 블랙프라이데이 50% 세일</p>
                    <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                </div>
            </div>
        </div>
        <div className='topreviewers-container'>
            <img src={reviewtitleImg} alt="topreviewers" className='reviewtitleImg'/>
            <div className="reviewercards">
                <ReviewerCard/>
            </div>
        </div>
        <div className='footer-container'>
            <Footer/>
        </div>
    </div>
  );
}

export default Main;