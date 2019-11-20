'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '<h1 style="color:#5cb85c;text-align:center;margin-top:300px">基于 Egg.js 的 API 服务 </h1>';
  }
}

module.exports = HomeController;
