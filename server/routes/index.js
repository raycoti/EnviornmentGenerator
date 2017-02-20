const messageRouter = require('./messages');
const router = require('express').Router();

module.exports = router;

router.use(messageRouter);
