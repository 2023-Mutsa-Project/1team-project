import React from 'react';
import '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import StarIcon from '@mui/icons-material/Star';
import './Reviewcard.css';

export default function ReviewCard({ productData }) {
  const {
    imageSrc,
    productName,
    rating,
    reviewCount,
    hashtags,
    price,
  } = productData;

  return (
    <Card className="card-container" 
    style={{ boxShadow: '0px 3px 20px 5px rgba(153, 153, 153, 0.25)', 
    borderRadius: '10px', 
    overflow: 'hidden', 
    width: '400px',}}>
      <CardMedia
        component="img"
        height="250"
        image={imageSrc}
        alt={productName}
      />
      <CardContent>
        <div className="desc">
          <div className="productName">
            <p>{productName}</p>
          </div>
          {/* Assuming brandName is available in productData */}
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
              <div key={index} className="hashtag1">
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
  );
}
