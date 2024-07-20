const express = require("express");
const app = express();

const bookRouter = require("./routes/bookRoute");

app.use("/books", bookRouter);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});