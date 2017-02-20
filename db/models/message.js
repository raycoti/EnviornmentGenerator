'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

const Message = db.define('message', {
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
}
// ,{
//   getterMethods: {

//   }

// }
)

module.exports = Message;
