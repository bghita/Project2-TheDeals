const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController.js')

//has /api/auth prepended to every route

router.route('/signup')
    .post(authController.signup)
    
// Login in a user and getting their User id
router.route('/login')
    .post(authController.login)

// future update feature route:
// router.route('/update')
//     .update(authController.update)

router.route('/load/:id')
    .get(authController.load)

module.exports = router;