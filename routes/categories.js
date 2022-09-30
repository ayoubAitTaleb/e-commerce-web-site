const express = require('express');
const router = express.Router();
const {userById} = require('../middlewares/user');
const {categoryId} = require('../middlewares/category');
const {requireSignIn, isAuth, isAdmin} = require('../middlewares/auth');
const {
    allCategories, 
    showCategory, 
    createCategory, 
    updateCategory, 
    deleteCategory
} = require('../controllers/categoryController');

router.param('userId', userById);
router.param('categoryId', categoryId);

router.get('/', allCategories);
router.get('/:categoryId', showCategory);
router.post('/create/:userId', [requireSignIn, isAuth, isAdmin], createCategory);
router.put('/:categoryId/:userId', [requireSignIn, isAuth, isAdmin], updateCategory);
router.delete('/:categoryId/:userId', [requireSignIn, isAuth, isAdmin], deleteCategory);

module.exports = router;