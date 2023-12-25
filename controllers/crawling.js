const puppeteer = require('puppeteer');
const Product = require('../models/products');
const { connectMongoDB } = require('../config/dev');

connectMongoDB();


const crawler = async () => {
  const browser = await puppeteer.launch({
      headless: false
  });   //브라우저를 열고
  global.page = await browser.newPage();   //새로운 창을 연다
  await page.goto(`https://www.coupang.com/np/search?component=&q=%ED%81%AC%EB%A6%B4%EC%98%A4%EC%9D%BC+%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8&channel=user`);
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  await page.setViewport({ width: 1200, height: 800 });
  await page.waitForTimeout(5000); 
  scraping(page);
};
const scraping = async(page) => {
  // 이미지 로딩이 완료될 때까지 대기
  await page.waitForFunction(() => {
    const images = document.querySelectorAll('li.search-product > a.search-product-link > dl > dt > img');
    return Array.from(images).every(img => img.complete && img.naturalHeight !== 0);
  });

  const productName_Elements = await page.$$('li.search-product > a.search-product-link > dl > dd > div > div.name'); 
  const originalPrice_Elements = await page.$$('li.search-product > a.search-product-link > dl > dd > div > div.price-area > div > div.price > span.price-info > del '); 
  const discountedPrice_Elements = await page.$$('li.search-product > a.search-product-link > dl > dd > div > div.price-area > div > div.price > em > strong'); 
  const rating_Elements = await page.$$('li.search-product > a.search-product-link > dl > dd > div > div.other-info > div > span.star > em'); 
  const reviewCount_Elements = await page.$$('li.search-product > a.search-product-link > dl > dd > div > div.other-info > div > span.rating-total-count'); 
  const productImage_Elements = await page.$$('li.search-product > a.search-product-link > dl > dt > img'); 
  const productLink_Elements = await page.$$('li.search-product > a.search-product-link'); 

  let productName = [];
  let originalPrice = [];
  let discountedPrice = [];
  let rating = [];
  let reviewCount = [];
  let productImage = [];
  let productLink = [];


  for (const element of productName_Elements) {
    const text = await element.evaluate(node => node.innerText);
    productName.push(text);
  }

  for (const element of originalPrice_Elements) {
    const text = await element.evaluate(node => node.innerText);
    originalPrice.push(parseFloat(text.replace(/[^\d.]/g, '')));
  }

  for (const element of discountedPrice_Elements) {
    const text = await element.evaluate(node => node.innerText);
    discountedPrice.push(parseFloat(text.replace(/[^\d.]/g, '')));
  }

  for (const element of rating_Elements) {
    const text = await element.evaluate(node => node.innerText);
    rating.push(parseFloat(text.replace(/[^\d.]/g, '')));
  }

  for (const element of reviewCount_Elements) {
    const text = await element.evaluate(node => node.innerText);
    reviewCount.push(parseInt((text.match(/\d+/) || [])[0]) || 0);
  }

  for (const element of productImage_Elements) {
    await page.waitForSelector('li.search-product > a.search-product-link > dl > dt > img');
  
    const srcElement = await element.evaluateHandle(node => {
      // 이미지 로드를 기다리거나 추가적인 로직 수행 가능
      return node.src;
    });
  
    const src = await srcElement.jsonValue();
    productImage.push(src);
  }

  for (const element of productLink_Elements) {
    // a 태그의 href 값이 추출될 때까지 대기
    await page.waitForSelector('a.search-product-link');
    
    const hrefElement = await element.evaluateHandle(node => {
      // 이 부분에서 추가적인 대기 또는 로직이 필요할 수 있음
      return node.getAttribute('href');
    });
  
    const href = await hrefElement.jsonValue();
    productLink.push('https://www.coupang.com' + href);
  }


  for (let i = 0; i < productName.length; i++) {
    try {
      // Create a data object
      const productData = {
        productName: productName[i],
        originalPrice: originalPrice[i],
        discountedPrice: discountedPrice[i],
        rating: rating[i],
        reviewCount: reviewCount[i],
        productImage: productImage[i],
        productLink: productLink[i],
        ingredients: '크릴오일', // You can adjust this value based on your requirement
      };
      const newProduct = new Product(productData);
      await newProduct.save();

      // Log the product data
      console.log('Product Data:', productData);

    } catch (error) {
      console.error(`Error while processing data: ${error.message}`);
    }
  }

};

crawler();




