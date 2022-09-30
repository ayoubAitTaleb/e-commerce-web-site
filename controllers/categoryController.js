const Category = require('../models/category');

exports.allCategories = (req, res) => {
  Category.find().exec((err, categories) => {
    if (err) {
      return res.status(500).json({
        error: err
      })
    }
    res.json({
      categories
    })
  })
}

exports.createCategory = (req, res) => {
  const category = new Category(req.body);
  category.save((err, category) => {
    if(err) {
      return res.status(400).json({
        error: 'Bad Request !!'
      })
    }
    res.json({
      category: category
    })
  })
}

exports.showCategory = (req, res) => {
  let category = req.category;
  res.json({
    category
  })
}

exports.updateCategory = (req, res) => {

  let category = req.category;
  category.name = req.body.name;
  category.save((err) => {
    if (err) {
      return res.status(400).json({
        error: 'bad Request !!'
      })
    }

    res.json({
      category,
      message: 'category updated'
    })
  })
}

exports.deleteCategory = (req, res) => {

  let category = req.category;
  category.remove((err) => {
    if (err) {
      return res.status(404).json({
        message: 'category not found !!'
      })
    }
    res.status(204).json({
      message: 'category deleted'
    })
  })
}
