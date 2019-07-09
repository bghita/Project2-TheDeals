const express = require('express');
const path = require('path');
const router = express.Router();

const api = require('./api');

router.use(express.static(path.join(__dirname, "../public")))
router.use('/api', api);

module.exports = router;