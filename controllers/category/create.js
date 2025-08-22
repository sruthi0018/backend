const category = require("../../models/category");

exports.createCategory = async (req, res,next) => {
  try {
    const data = req.body;

    const category = await category.create(data);
    res.status(201).json(category);
  }  catch (e) { next(e); }
};