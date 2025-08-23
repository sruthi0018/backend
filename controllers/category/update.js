const category = require("../../models/category");

exports.updateCategory = async (req, res, next) => {
  try {
    const cat = await category.findByIdAndUpdate(req.params.id, 
      { name: req.body.name ,
        description: req.body.description

    }, { new: true });
    if (!cat) return res.status(404).json({ message: 'Category not found' });
    res.json(cat);
  } catch (e) { next(e); }
};