const db = require('../../db')
const router = require('express').Router();
const Sequelize = require('sequelize');
const Message = require('../../db/models').Message;
router.get('/messages', (req, res, next) => {
  Message.findAll({})
  .then((response) => {
    console.log(response)
    res.send('cool')});
})

module.exports = router;