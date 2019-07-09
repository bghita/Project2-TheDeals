const express = require('express');
const router = express.Router();

const couponController = require('./../../controllers/couponController.js')
// Has /api/todos prepended to all of its routes

router.route('/')
    // .get( (req,res)=>res.send('hi'))
    .get(couponController.cities);

// router.route('/')
//     .get(couponController.cities); 

module.exports = router;
