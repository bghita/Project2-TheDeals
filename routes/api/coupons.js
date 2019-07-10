const express = require('express');
const router = express.Router();


//  /api/coupons prependewd

const couponController = require('./../../controllers/couponController.js')

router.route('/cities')
    .get(couponController.cities)

router.route('/citiesid')
    .get(couponController.citiesID)

router.route('/coupons')
    .post(couponController.coupons)

router.route('/testcoupons')
    .get(couponController.testCoupons)



module.exports = router;