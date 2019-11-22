const express = require('express');
const urlsLogic = require('./urlsLogic');
const router = express.Router();

router.post('/addUrl', urlsLogic.addUrl);
router.get('/getUrls/:userName', urlsLogic.getUrls);
router.post('/startStreaming', urlsLogic.startStreaming);

module.exports = router;