const category = require("../../models/category");

exports.deleteCategory = async (req, res, next) => {
  try {
    const cat = await category.findByIdAndDelete(req.params.id);
    if (!cat) return res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Deleted' });
  } catch (e) { next(e); }
};