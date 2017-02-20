'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

const Reader = db.define('reader', {
  xCoor: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate:{
      notEmpty: true
    }
  },
  yCoor:{
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
},
{
  getterMethods:{
    location: function(){
      return {
        x: this.xCoor,
        y: this.yCoor
      }
    }
  }
}
)

module.exports = Reader;
