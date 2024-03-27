const { Router } = require("express");
const productController = require('../controllers/productController');
const userController = require('../controllers/userController');

const router = Router();

router.get('/products', productController.getAllProducts); // funciona
router.get('/products/:id', productController.getProductById); //funciona
router.post('/products', productController.createProduct); // funciona
router.put('/products/:id', productController.updateProduct); // funciona
router.delete('/products/:id', productController.deleteProduct); // funciona


router.get('/users/listAllUser', userController.listAllUser); //funciona
router.get('/users/listUserID/:id', userController.listUserID); //funciona
router.post('/users/createUser', userController.createUser); //funciona
router.put('/users/updateUser/:id', userController.updateUser);
router.delete('/users/deleteUser/:id', userController.deleteUser);


module.exports = router;
