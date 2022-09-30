const express = require('express');
const router = express.Router();
const {requireSignIn} = require('../middlewares/auth');
const {userRoute, signup, signin, signout} = require('../controllers/authController')
const {userSignUpValidator} = require('../middlewares/userValidator')
router.get('/', userRoute);
router.post('/signup', userSignUpValidator, signup)
router.post('/signin', signin)
router.get('/signout', signout)
router.get('/hello', requireSignIn, (req, res) => {
  res.send("hello world");
})

module.exports = router;