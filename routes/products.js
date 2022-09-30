const express = require('express');
const router = express.Router();
const {
		allProducts,
		createProduct, 
		showProduct, 
		productById, 
		removeProduct, 
		updateProduct,
		relatedProducts,
		searchProduct,
		photoProduct
	} = require('../controllers/productController');
const {userById} = require('../middlewares/user');
const {requireSignIn, isAuth, isAdmin} = require('../middlewares/auth');

router.get('/', allProducts)
router.get('/:productId', showProduct);
router.post('/create/:userId', [requireSignIn, isAuth, isAdmin], createProduct);
router.delete('/:productId/:userId', [requireSignIn, isAuth, isAdmin], removeProduct)
router.put('/:productId/:userId', [requireSignIn, isAuth, isAdmin], updateProduct)
router.get('/related/:productId', relatedProducts)
router.post('/search', searchProduct)
router.get('/photo/:productId', photoProduct)

router.param('userId', userById);
router.param('productId', productById);

module.exports = router;