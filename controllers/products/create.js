const Product = require('../../models/products');

exports.createProduct = async (req, res) => {
  try {
    const data = req.body;

    console.log("Files uploaded:", req.files);
console.log("Body:", req.body);

   
   if (req.files && req.files.length > 0) {
      data.images = req.files.map((file) => `/uploads/products/${file.filename}`);
    }

    const product = new Product(data);
    await product.save();

    console.log("Created Product:", product);

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to create product",
      error: error.message,
    });
  }
};
