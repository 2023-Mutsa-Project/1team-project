import * as React from 'react';
import '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'; 
import imageSrc from '../img/product1.png';
import './CardSearch.css';


export default function SearchCard({ productData }) {
  const { imageSrc, productName, rating, reviewCount, hashtags, price } = productData;

  return (
    <Link to={`/detail`} className="card-link">
      <Card className="card-container" elevation={0}>
        <Box style={{ boxShadow: '0px 2px 20px 0px rgba(153, 153, 153, 0.25)' }}>
          <CardMedia
            component="img"
            height="250"
            image={imageSrc}
            alt="Product Image"
          />
        </Box>
        <CardContent>
          <div className="desc">
            <div className="productName">
              <p>{productName}</p>
            </div>
          </div>
          <div className="review">
            <div className="rate">
              <StarIcon style={{ color: 'red' }} />
              <p>{rating}</p>
            </div>
            <div className="review-count">
              <p>리뷰</p>
              <p style={{ color: '#999999' }}>{reviewCount}건</p>
            </div>
          </div>
          <div className="detail">
            <div className="hashtag-container">
              {hashtags.map((hashtag, index) => (
                <div className="hashtag1" key={index}>
                  <p style={{ color: '#999999' }}>{hashtag}</p>
                </div>
              ))}
            </div>
            <div className="price">
              <p>{price}원</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
