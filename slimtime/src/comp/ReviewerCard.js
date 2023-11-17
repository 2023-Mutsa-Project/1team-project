import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/material/Typography';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Profile from '../img/profileimg.png';
import './ReviewerCard.css'

export default function ReviewerCard() {
  return (
    <Card className="reviewercard"
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        width: 343,
        boxShadow: '0px 3px 20px 5px rgba(153, 153, 153, 0.25)', borderRadius: '10px', 
        overflow: 'hidden',
        '--icon-size': '100px',
      }}
    >
      <CardOverflow variant="solid" color="#5D9EFF">
      <AspectRatio
          variant="outlined"
          ratio="1"
          sx={{
            m: 'auto',
            transform: 'translateY(50%)',
            borderRadius: '50%',
            width: 'var(--icon-size)',
            boxShadow: 'sm',
            position: 'relative',
          }}
        >
          <div>
            <img src={Profile}></img>
          </div>
        </AspectRatio>
      </CardOverflow>
      <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)', fontSize: '1.2rem'}}>
        유지어터장인 
    </Typography>
      <CardActions
        orientation="vertical"
        buttonFlex={1}
        sx={{
            textAlign: 'center',
            alignItems: 'center',
          '--Button-radius': '40px',
          width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
        }}
      >
        <Button variant="solid" className="show-btn">
          작성 리뷰 보러가기
        </Button>
      </CardActions>
      <hr className="custom-line" />
      <div className="review-info">
            <div className="count-review">
                <div className="review-section">
                    <EditOutlinedIcon/>
                    <p>총 리뷰 수</p>
                </div>
                <div className="reviewnum">
                    <p>135건</p>
                </div>
            </div>
            <div className="count-like">
                <div className="like-section">
                    <ThumbUpOutlinedIcon/>
                    <p>누적 좋아요 수</p>
                </div>
            <div className="likenum">
                <p>135회</p>
                </div>
            </div>
       </div>
    </Card>
  );
}
