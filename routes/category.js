const express = require("express");
const { createCategory } = require("../controllers/category/create");
const { getCategories } = require("../controllers/category/get");
const { updateCategory } = require("../controllers/category/update");
const { deleteCategory } = require("../controllers/category/delete");
const { getById } = require("../controllers/category/getById");
const router = express.Router();

router.post('/', createCategory);
router.get('/',getCategories)
router.get('/:id',getById);
router.put('/:id', updateCategory);
router.delete('/:id',deleteCategory)

module.exports = router;
