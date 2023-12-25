 const express = require('express'); 
 const app = express(); 
 const port = 5000;
 const { connectMongoDB } = require('./config/dev'); 
 const searchRouter = require('./routes/search');

 connectMongoDB(); //몽고디비 연결

// 라우터 등록
app.use('/products', searchRouter);

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
