import * as React from 'react';
import '@mui/material/styles';
import Card from '@mui/material/Card';
import profileImg from '../img/profileimg.png';
import ChallengeInfocard from './Challengeinfo.js'
import './ReviewerCard.css';
import product2 from '../img/product2.png'

export default function ReviewerCard() {
  const textStyle1 = {
    color: '#000000', 
  };

  const textStyle2 = {
    color: '#666666',
  };

  const textStyle3 = {
    color: '#5D9EFF',
  };

  return (
    <Card className="user-container" style={{ boxShadow: '0px 3px 20px 5px rgba(153, 153, 153, 0.25)', borderRadius: '20px', overflow: 'hidden' }}> 
        <div className="profile-container">
            <div className="profile-section">
              <img src={profileImg} width="120px" height="120px" alt="profile"/>
              <p style={textStyle1}>유지어터 장인</p>
              <p style={textStyle2}>32,000P</p>
              <div className="Line1"></div>
            </div>        
            <div className="profiledescription-container">
              <div className='reviewinfo'>
                <div className="count-review">
                    <p style={textStyle3}>작성 리뷰 수</p>
                </div>
                <div className="count-info">
                    <p style={textStyle2}>130건</p>
                </div>
              </div>
              <div className='likeinfo'>
                <div className="count-like">
                    <p style={textStyle3}>누적 좋아요 수</p>
                </div>
                <div className="count-info">
                    <p style={textStyle2}>180개</p>
                </div>
              </div>
            </div>
            <div className="detail-btn">
              <p>작성 리뷰 보러가기</p>
            </div>
        </div>
        <div className="detailinfo-container">
          <div className='dietchallenge-container'>
            <p>참여 중인 다이어트 챌린지 달성 현황 (12월)</p>
          </div>
          <div className='challengedetail-container'>
            <ChallengeInfocard/>
            <ChallengeInfocard/>
            <ChallengeInfocard/>
          </div>
          <div className='profilereview-container'>
            <div className='dietchallenge-container'>
              <p>최근 작성한 리뷰(12월)</p>
            </div>
            <div className="reviewsapmle-container">
            <div className="reviewtext-container">
              <img src={product2} 
                height="150"
                width="130"
                alt="product"/>
              <div className="reviewtext">
                <h3>보조제와 유산소로 한달에 10kg 감량한 썰</h3>
                <p>핑크포뮬러 핑포워터 다이어트 워터믹스 보조제로 한 달에 10kg 뺐습니다. 
                물론 운동도 해야하지만 다른 보조제도 많이 써봤었는데 이건 역대급이에요.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
    </Card>
  );
}
