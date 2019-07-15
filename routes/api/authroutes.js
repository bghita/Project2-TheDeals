const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController.js')

//has /api/auth prepended to every route

router.route('/signup')
    .post(authController.signup)
    

// Login in a user and getting their User id
// router.route('/login')
//     .post(authController.login)



module.exports = router;