import * as React from 'react';
import challengeImg from '../img/challenge1.png'
import CircularProgress from '@mui/joy/CircularProgress';
import SvgIcon from '@mui/joy/SvgIcon';
import './Challengeinfo.css'


export default function ChallengeInfocard() {
  return (
    <div className="challengeinfocards-container">
        <img
          src={challengeImg}
          height="200"
          width="200"
          alt=""
        />
        <div className="challengeinfo-container">
            <div className="challengedetail-text">
                <p>주 3회 헬스장</p>
            </div>
            <div className="progress-bar">
                <CircularProgress className="status" size="sm" determinate value={70} >
                    <SvgIcon>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="4 4 28 28"
                        strokeWidth={2}
                        stroke="currentColor"
                        >
                        </svg>
                    </SvgIcon>
                </CircularProgress>
            </div>
        </div>

    </div>
  );
}
