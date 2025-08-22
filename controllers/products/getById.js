const Products = require("../../models/products");

exports.getById = async (req, res, next) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) return res.status(404).json({ ok: false, error: "Not found" });
    res.json({ ok: true, data: product });
  } catch (e) {
    next(e);
  }
};
