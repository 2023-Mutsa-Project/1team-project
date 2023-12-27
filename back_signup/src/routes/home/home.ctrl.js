"use stirct";
const User = require("../../models/User");
//MVC 에서 컨트롤러

const output = {
  hello: (req, res) => {
    res.render("home/index"); // render()는 ejs로 데이터를 전송하는 역활을 하는 콜백 함수
  },

  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  },
};
//await asnyc 로 비동기 처리
const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    // console.log(response);
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    // console.log(response);
    return res.json(response);
  },
};
module.exports = {
  output,
  process,
};
