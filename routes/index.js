const express = require('express');
const path = require('path');
const router = express.Router();

const api = require('./api');

router.use(express.static(path.join(__dirname, "../public")))
router.use('/api', api);

router.route('/signup')
    .get(function(req, res) {
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    })


// router.route('/api/user/:userId/coupon/:couponId')
//     .get()
//     .delete()

module.exports = router;

// /api/user/:userId/coupon/:couponId

