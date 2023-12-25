const express = require('express');
const router = express.Router();
const Product = require('../models/products');
const mongoose = require('mongoose');


router.get('/', async (req, res) => {
  try {
    // 쿼리 파라미터 파싱
    const sortBy = req.query.sort_by || '';
    const priceRange = req.query.price_range || '';
    const keyword = req.query.keyword || '';
    
    // 필터 조건 생성
    const filter = {};
    if (priceRange) {
        const [minPrice, maxPrice] = priceRange.split('-');
        filter.discountedPrice = { $gte: parseInt(minPrice), $lte: parseInt(maxPrice) || Number.MAX_SAFE_INTEGER };
    }
    if (keyword) {
        filter.productName = { $regex: new RegExp(keyword, 'i') }; // 대소문자 구분 없이 키워드 검색
    }
    
    // 정렬 기준에 따른 정렬 옵션
    let sortOption = {};
    if (sortBy === 'popular') {
        sortOption = { reviewCount: -1 }; // 리뷰 많은 순
    } else if (sortBy === 'rating_high') {
        sortOption = { rating: -1 }; // 높은 평점순
    } else if (sortBy === 'price_low') {
        sortOption = { discountedPrice: 1 }; // 낮은 가격순
    }

    // 상품 조회
    const products = await Product.find(filter).sort(sortOption);

    // 응답
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 리뷰 수와 평점이 가장 높은 3개의 상품 조회
router.get('/top-products', async (req, res) => {
    try {
      const topProducts = await Product.find({})
        .sort({ reviewCount: -1, rating: -1 }) // 내림차순으로 정렬
        .limit(3);
  
      res.json(topProducts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

// 특정 product id에 대한 정보 조회
router.get('/:productId', async (req, res) => {
    try {
      const { productId } = req.params;
  
      // product id가 유효한 ObjectId인지 확인
      if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({ message: 'Invalid product ID' });
      }
  
      const product = await Product.findById(productId);
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });


  router.post('/:productId/reviews', async (req, res) => {
    try {
        const { productId } = req.params;
        const {
            username,
            rating,
            comment,
            effect,
            expiration_date,
            taste,
            repurchase,
        } = req.body;

        // Check if the product ID is valid
        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ message: 'Invalid product ID' });
        }

        // Find the product by ID
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Find the userId based on the provided username
        // (Assuming there is a User model with a username and userId field)
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Create a new review
        const newReview = {
            username,
            userId: user.userId,
            rating,
            comment,
            effect,
            expiration_date,
            taste,
            repurchase,
        };

        // Add the review to the product's reviews array
        product.reviews.push(newReview);

        // Update product rating and review count
        product.rating = (product.rating * product.reviewCount + rating) / (product.reviewCount + 1);
        product.reviewCount += 1;

        // Save the updated product
        await product.save();

        res.status(200).json({ message: 'Review added successfully', product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


module.exports = router;