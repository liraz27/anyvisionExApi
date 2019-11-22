const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const usersRoutes = require('./users');
const urlsRoutes = require('./urls');

const router = express.Router();

router.use(cors());
router.use(bodyParser.json());
router.use('/users',usersRoutes);
router.use('/urls',urlsRoutes);

router.get('/', (req, res) => {
   res.json('server works!') ;
});

module.exports = router;