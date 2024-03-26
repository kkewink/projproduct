const { Router } = require("express");
const productController = require('../controllers/productController');
const userController = require('../controllers/userController');

const router = Router();

router.get('/products', productController.getAllProducts); // foi
router.get('/products/:id', productController.getProductById); //foi
router.post('/products', productController.createProduct); // foi
router.put('/products/:id', productController.updateProduct); // foi
router.delete('/products/:id', productController.deleteProduct); // foi


router.get('/users/listAllUser', userController.listAllUser);
router.get('/users/listUserID/:id', userController.listAllUserID);
router.post('/users/createUser', userController.createUser);
router.put('/users/updateUser/:id', userController.updateUser);
router.delete('/users/deleteUser/:id', userController.deleteUser);


module.exports = router;
