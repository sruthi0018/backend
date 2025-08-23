const express = require('express');
const upload = require('../middleware/upload');
const { get } = require('../controllers/products/get');
const { createProduct } = require('../controllers/products/create');
const { updateProduct } = require('../controllers/products/update');
const {  getById } = require('../controllers/products/getById');
const { deleteProduct } = require('../controllers/products/delete');

const router = express.Router();

router.get('/',get);
router.get('/:id',getById);
router.post('/', upload.array('images', 5), createProduct);
router.put('/:id',upload.array('images', 5), updateProduct);
router.delete('/:id',deleteProduct);

module.exports = router;
