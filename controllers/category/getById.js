const category = require("../../models/category");

exports.getById = async (req, res, next) => {
  try {
    const cat = await category.findById(req.params.id)
    if (!cat) return res.status(404).json({ ok: false, error: "Not found" });
    res.json({ ok: true, data: cat });
  } catch (e) {
    next(e);
  }
};
