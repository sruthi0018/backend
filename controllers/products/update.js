const Product = require("../../models/products");

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let updates = { ...req.body };

    const existingProduct = await Product.findById(id);

    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

 if (req.files && req.files.length > 0) {
      const newImages = req.files.map(file => `/uploads/products/${file.filename}`);
      updates.images = [...(existingProduct.images || []), ...newImages];
    }

    const product = await Product.findByIdAndUpdate(id, updates, { new: true });
    res.json({ message: "Product updated", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating product" });
  }
};
