const bookService = require("../services/bookService");

exports.getAllBooks = async (req, res) => {
  const { categoryId, newBook, limit, currentPage } = req.query;
  try {
    const books = await bookService.getAllBooks(categoryId, newBook, limit, currentPage);
    return res.status(200).json(books);
  } catch (err) {
    return res.status(500).json(err);
  }
};