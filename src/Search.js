import React, { useState } from 'react';
import Navbar from './comp/Navbar';
import './Search.css';
import Footer from './comp/footer';
import SearchCard from './comp/Cardsearch';
import PaginationRounded from './comp/Pagination';
import product1Image from './img/product1.png';
import product2Image from './img/product_2.png';
import product3Image from './img/product_3.png';
import product4Image from './img/product_4.png';
import product5Image from './img/product_5.png';
import product6Image from './img/product_6.png';
import product7Image from './img/product_7.png';
import product8Image from './img/product_8.png';
import product9Image from './img/product_9.png';
import product10Image from './img/product_10.png';
import product11Image from './img/product_11.png';
import product12Image from './img/product_12.png';

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
{
  imageSrc: product4Image,
  productName: '마이 다이어트',
  rating: '4.27',
  reviewCount: 98,
  hashtags: ['#가르시니아', '#체지방 감소'],
  price: '25,000',
},
{
  imageSrc: product5Image,
  productName: '슬림큐브 플러스',
  rating: '4.36',
  reviewCount: 95,
  hashtags: ['#카테킨', '#배변활동원활'],
  price: '78,000',
},
{
  imageSrc: product6Image,
  productName: '시네트롤 브이세븐',
  rating: '3.71',
  reviewCount: 25,
  hashtags: ['#비타민B', '#건강기능식품'],
  price: '31,590',
},
{
  imageSrc: product7Image,
  productName: '올 뉴 초록이 시즌4',
  rating: '4.20',
  reviewCount: 39,
  hashtags: ['#미네랄', '#체지방감소'],
  price: '44,000',
},
{
  imageSrc: product8Image,
  productName: '슬림컷',
  rating: '4.20',
  reviewCount: 49,
  hashtags: ['#건강기능식품', '#서플리먼트'],
  price: '50,000',
},
{
  imageSrc: product9Image,
  productName: '세리컷 스타터 블루밍',
  rating: '4.20',
  reviewCount: 49,
  hashtags: ['#건강기능식품', '#카테킨'],
  price: '43,000',
},
{
  imageSrc: product10Image,
  productName: '올 뉴 분홍이 시즌4',
  rating: '3.8',
  reviewCount: 40,
  hashtags: ['#건강기능식품', '#미네랄'],
  price: '44,000',
},
{
  imageSrc: product11Image,
  productName: '가르시니아',
  rating: '4.67',
  reviewCount: 100,
  hashtags: ['#가르시니아', '#체지방 감소'],
  price: '19,900',
},
{
  imageSrc: product12Image,
  productName: '애플페논 풋사과 다이어트',
  rating: '3.75',
  reviewCount: 100,
  hashtags: ['#건강기능식품', '#체지방 감소'],
  price: '29,900',
},

];


function Search({ onSearch, searchResults }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query); // Trigger search as the user types
  };

  return (
    <div className="container">
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <div className="search-section">
            <input
              type="text"
              id="search"
              className="input"
              placeholder="원하는 다이어트 보조제를 검색해보세요."
              value={searchQuery}
              onChange={handleInputChange}
              required
            />

            <button type="submit" className="button">
              Search
            </button>
          </div>
        </form>
      </div>
      {/* Display search results only if there is a search query */}
      {searchQuery && (
        <div className="search-results">
          <p>Search Results:</p>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result.productName}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Main() {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const totalItems = searchResults.length || productDataList.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedItems = searchQuery
    ? searchResults.slice(startIndex, endIndex)
    : productDataList.slice(startIndex, endIndex);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Perform search and update the searchResults state
    const filteredResults = productDataList.filter((product) =>
      product.productName.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
    setCurrentPage(1); // Reset to the first page after search
  };
  return (
    <div>
      <div className="main-container">
        <Navbar />
        <Search onSearch={handleSearch} searchResults={searchResults} />
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
        <div className="card-grid-container">
          {displayedItems.map((productData, index) => (
            <SearchCard key={index} productData={productData} />
          ))}
        </div>
      </div>
      <div className="pagination-container">
      <PaginationRounded
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default Main;
