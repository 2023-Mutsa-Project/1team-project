"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const { auth } = require("./middleware/auth");
const { User } = require("./models/User");
const port = 5000;

const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
// app.set("views", "./views");
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`)); //src 앞에 / 뺴먹으면 바로 css 안잎혀진다.

app.use(bodyParser.json()); //json data를 파싱해 올수 있도록 명시

app.use(bodyParser.urlencoded({ extended: true })); //url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 재대로 인식 되지 않는 문제 해결

app.use("/", home); //use -> 미들웨어를 등록해주는 메서드

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
