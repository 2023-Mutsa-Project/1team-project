import * as React from 'react';
import '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import StarIcon from '@mui/icons-material/Star';
import ProductImg from '../img/product1.png';
import './Reviewcard.css';


export default function ReviewCard() {

  return (
    <Card className="card-container" style={{ boxShadow: '0px 3px 20px 5px rgba(153, 153, 153, 0.25)', borderRadius: '10px', overflow: 'hidden' }}> 
            <CardMedia
                component="img"
                height="250"
                image={ProductImg}
                alt="Paella dish"
            />
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
                <div className="review-count">
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
                    <p>44,000원</p>
                </div>
            </div>
      </CardContent>
    </Card>
  );
}
