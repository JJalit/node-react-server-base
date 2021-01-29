const express = require("express");
const app = express();
const port = 5000;

// mongoose 적용하기
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://jaeha23:dlwogk23@boilerplate.rw3qb.mongodb.net/BoilerPlate?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World! 제대로 하자");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
