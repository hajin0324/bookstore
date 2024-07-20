exports.getAllBooks = (categoryId, newBook, limit, currentPage) => {
  let query = "SELECT * FROM books";
  let queryParams = [];

  if (categoryId && newBook) {
    query += ` WHERE category_id = ? AND pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()`;
    queryParams.push(categoryId);
  } else if (categoryId) {
    query += ` WHERE category_id = ?`;
    queryParams.push(categoryId);
  } else if (newBook) {
    query += ` WHERE pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()`;
  }

  let offset = limit * (currentPage - 1);
  query += ` LIMIT ${limit} OFFSET ${offset}`;

  return { query, queryParams };
};