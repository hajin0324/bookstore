const bookModel = require("../models/bookModel");
const initializeConnection = require("../db.js");

exports.getAllBooks = async (categoryId, newBook, limit, currentPage) => {
  try {
    const connection = await initializeConnection();
    const { query, queryParams } = bookModel.getAllBooks(categoryId, newBook, limit, currentPage);
    console.log(query, queryParams );
    const [rows, fields] = await connection.query(query, queryParams);
    await connection.end();
    return rows;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
};