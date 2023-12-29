import * as React from 'react';
import '@mui/material/styles';
import Card from '@mui/material/Card';
import StarIcon from '@mui/icons-material/Star';
import CardContent from '@mui/material/CardContent';
import './ReviewBox.css';


export default function ReviewBox() {

  return (
    <Card className="box-container" style={{ background: "rgba(93, 158, 255, 0.05)", boxShadow: '0px 3px 20px 5px rgba(153, 153, 153, 0.15)', borderRadius: '10px', overflow: 'hidden' }}>
      <CardContent>
        <div className="raterank">
            <p className="textrank">고객 평점 1위</p>
            <p className="ratenum">5</p>
            <StarIcon style={{ color: 'red' }} />
            <StarIcon style={{ color: 'red' }} />
            <StarIcon style={{ color: 'red' }} />
            <StarIcon style={{ color: 'red' }} />
            <StarIcon style={{ color: 'red' }} />
        </div>
        <div className="customeraverage">
            <p className="textrank">매우 만족 (5점) </p>
        </div>
      </CardContent>
    </Card>
  );
}
