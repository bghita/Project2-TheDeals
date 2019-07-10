const express = require('express');
const router = express.Router();

const couponRoutes = require('./coupons.js');
// Has /api/ prepended to all of its routes

const authRoutes = require('./authroutes');

router.use('/coupons', couponRoutes);

router.use('/auth', authRoutes);



// router.route('/')
//     // .get( (req,res)=>res.send('hi'))
//     .get(couponController.cities);

// router.route('/')
//     .get(couponController.cities); 

module.exports = router;
