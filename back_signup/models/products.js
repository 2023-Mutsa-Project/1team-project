const mongoose = require("mongoose");

// 리뷰 스키마 정의
const reviewSchema = new mongoose.Schema({
  username: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  rating: { type: Number, required: true },
  comment: { type: String },
  effect: { type: String },
  expiration_date: { type: String },
  taste: { type: String },
  repurchase: { type: Number, required: true },
});

// 몽고DB 스키마 정의
const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  originalPrice: { type: Number },
  discountedPrice: { type: Number, required: true },
  company: { type: String },
  rating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 }, // 초기값 0으로 설정
  ingredients: { type: [String] },
  productImage: { type: String },
  productLink: { type: String, required: true },
  reviews: [reviewSchema],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
