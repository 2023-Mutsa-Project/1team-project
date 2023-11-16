import * as React from 'react';
import '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import StarIcon from '@mui/icons-material/Star';
import ProductImg from '../img/product1.png';
import './Reviewcard.css';


export default function ReviewCard() {

  return (
    <Card className="card-container" sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="350"
        image={ProductImg}
        alt="Paella dish"
      />
      <CardContent>
        <div className="desc">
            <div className="productName">
                <p>grn+ 벨리곰X슬림밸런스 분홍이/초록이 35일분 택 1</p>
            </div>
            <div className="brandName">
                <p>GRN+</p>
            </div>
        </div>
            <div className="review">
                <div className="rate">
                    <StarIcon />
                    <p>4.21</p>
                </div>
                <div className="reviewcount">
                    <p>리뷰</p>
                    <p color="light-grey">268건</p>
                </div>
                <div className="hashtag">
                    <p>가르시니아</p>
                    <p>체지방 감소</p>
                    <p>노화 억제</p>
                </div>
                <div className="price">
                    <p>36,000원</p>
                </div>
            </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
