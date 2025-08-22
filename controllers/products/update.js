const Product = require("../../models/products");

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    if (req.files && req.files.length > 0) {
      updates.image = req.files.map(file => `/uploads/products/${file.filename}`);
    }
    const product = await Product.findByIdAndUpdate(id, updates, { new: true });
    res.json({ message: 'Product updated', product });
  } catch (error) {
    res.status(500).json({ message: 'Error updating product' });
  }
};