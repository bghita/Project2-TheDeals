const express = require('express');
const router = express.Router();

const couponRoutes = require('./coupons.js');
// Has /api/ prepended to all of its routes

router.use('/coupons', couponRoutes);


// router.route('/')
//     // .get( (req,res)=>res.send('hi'))
//     .get(couponController.cities);

// router.route('/')
//     .get(couponController.cities); 

module.exports = router;
