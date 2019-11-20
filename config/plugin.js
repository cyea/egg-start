'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  static: {
    enable: true
  },
  routerPlus: {
    enable: true,
    package: 'egg-router-plus'
  },
  cors: {
    enable: true,
    package: 'egg-cors'
  }
};
