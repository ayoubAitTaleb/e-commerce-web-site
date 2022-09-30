exports.userSignUpValidator = (req, res, next) => {

  req.check('name', 'Name Is Required').notEmpty();
  req.check('email', 'Email is required').isEmail();
  req.check('password', 'Password Is Required')
    .notEmpty()
    .isLength({min: 6, max: 10})
    .withMessage('Password Must Be Betwin 6 and 10 Characters')
  
    const errors = req.validationErrors()

  if(errors) {
    return res.status(400).json({error: errors[0].msg})
  }
  next()
}