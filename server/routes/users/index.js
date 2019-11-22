const express = require('express');
const usersLogic = require('./usersLogic');
const router = express.Router();

router.post('/newUser', usersLogic.addNewUser);
router.post('/login', usersLogic.login)
router.get('/checkIfUserExist/:userName', usersLogic.checkIfUserExist);

module.exports = router;