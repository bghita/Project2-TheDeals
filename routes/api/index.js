const express = require('express');
const router = express.Router();

const couponController = require('./../../controllers/couponController.js')
// Has /api/todos prepended to all of its routes

router.route('/')
    .get(couponController.coupons);

router.route('/')
    .get(couponController.cities);
