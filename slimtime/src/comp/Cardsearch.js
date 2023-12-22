import * as React from 'react';
import '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import StarIcon from '@mui/icons-material/Star';
import ProductImg from '../img/product1.png';
import Box from '@mui/material/Box';
import './CardSearch.css';

export default function SearchCard() {
  return (
    <Card className="card-container" elevation={0}>
        <Box style={{ boxShadow: '0px 2px 20px 0px rgba(153, 153, 153, 0.25)' }}>{/* 그림자 추가 */}
        <CardMedia
          component="img"
          height="250"
          image={ProductImg}
          alt="Product Image"
        />
      </Box>
      <CardContent>
        <div className="desc">
          <div className="productName">
            <p>분홍이/초록이 35일분 택 1</p>
          </div>
          <div className="brandName">
            <p>GRN+</p>
          </div>
        </div>
        <div className="review">
          <div className="rate">
            <StarIcon style={{ color: 'red' }} />
            <p>4.21</p>
          </div>
          <div className="reviewcount">
            <p>리뷰</p>
            <p style={{ color: '#999999' }}>268건</p>
          </div>
        </div>
        <div className="detail">
          <div className="hashtag-container">
            <div className="hashtag1">
              <p style={{ color: '#999999' }}>#가르시니아</p>
            </div>
            <div className="hashtag1">
              <p style={{ color: '#999999' }}>#체지방 감소</p>
            </div>
            <div className="hashtag1">
              <p style={{ color: '#999999' }}>#노화 억제</p>
            </div>
          </div>
          <div className="price">
            <p>36,000원</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
