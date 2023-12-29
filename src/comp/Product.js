import * as React from 'react';
import '@mui/material/styles';
import Card from '@mui/material/Card';
import StarIcon from '@mui/icons-material/Star';
import './Product.css';
import CardContent from '@mui/material/CardContent';
import productImg from '../img/product3.jpg'

export default function ProductCard() {

  return (
    <Card className="product-container" style={{ boxShadow: '0px 3px 20px 5px rgba(153, 153, 153, 0.25)', borderRadius: '10px', overflow: 'hidden' }}> 
        <div className="image-container">
            <img src={productImg}  alt="profile" />
        </div>
        <div className="productname-container">
            <div className="product-title">
                <p>분홍이/초록이 35일분 택 1</p>
            </div>
            <div className="moredetail">
                <div className="rate">
                    <StarIcon style={{ color: 'red' }} />
                    <p>4.21</p>
                </div>
                <div className="countingreview">
                    <p>리뷰 38건</p>
                </div>
                <div className='pricetag'>
                    <p>44,000원</p>
                </div>
            </div>
            <div className="line2"></div>
            <div className='explain-container'>
                <div className='explain-title'>
                    <p>제품 소개</p>
                </div>
                <div className="hashtags">
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
            </div>
            <div className='productdesc'> 
                <p>무거운 체지방에 지친 당신에게 선물하는 가벼운 다이어트</p>
            </div>
            <div className="element" style={{ textAlign: 'left', color: '#5D9EFF' }}>
                <h1 style={{ fontSize: '20px' }}>가르시니아?</h1>
            </div>
            <div className='elementdesc'>
                <p>탄수화물 섭취가 많을 때 도움되는 성분으로 탄수화물이 지방으로 전환되는 것을 억제 & 체지방 감소에 도움을 줌</p>
            </div>
            <div className='immediate-link'>
                <p style={{ fontSize: '20px' }}> 바로가기</p>
            </div>
            <div className='links'>
                <a href="https://www.coupang.com/vp/products/6386381514?itemId=13592499616&vendorItemId=87516922232&q=%EB%B6%84%ED%99%8D%EC%9D%B4%2F%EC%B4%88%EB%A1%9D%EC%9D%B4+35%EC%9D%BC%EB%B6%84+%ED%83%9D+1&itemsCount=36&searchId=fce957582e1a4ca6bb4c2f889239630f&rank=10&isAddedCart=">쿠팡</a>
                <a href="https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000186058&t_page=%ED%86%B5%ED%95%A9%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC%ED%8E%98%EC%9D%B4%EC%A7%80&t_click=%EA%B2%80%EC%83%89%EC%83%81%ED%92%88%EC%83%81%EC%84%B8&t_search_name=%EB%B6%84%ED%99%8D%EC%9D%B4%2F%EC%B4%88%EB%A1%9D%EC%9D%B4%2035%EC%9D%BC%EB%B6%84%20%ED%83%9D%201&t_number=1&dispCatNo=1000002000100230001&trackingCd=Result_1">11번가</a>
                <a href="https://www.11st.co.kr/products/5445643470?gclid=Cj0KCQiA1rSsBhDHARIsANB4EJZUikuoIhaR85f0CZVf4MNlau0tJrB8MhftPF8inWO_VAGQKwCpOIQaAm9-EALw_wcB&gad_source=1&utm_term=&utm_campaign=googleshopping_pc_basic_new&utm_source=%B1%B8%B1%DB_PC_S_%BC%EE%C7%CE&utm_medium=%B0%CB%BB%F6">올리브영</a>
            </div>
        </div>
        
    </Card>
  );
}