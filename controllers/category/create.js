const category = require("../../models/category");

exports.createCategory = async (req, res,next) => {
  try {
    const data = req.body;

    const cat = await category.create(data);
    res.status(201).json(cat);
  }  catch (e) { next(e); }
};