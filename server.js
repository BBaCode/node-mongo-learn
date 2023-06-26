const express = require("express");
const app = express();
const blogRouter = require("./routes/BlogRoutes");

require("dotenv").config();

//middleware
app.use(express.json());
app.use("/api/blogs", blogRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

const mongoose = require("mongoose");
//configure mongoose
const url = `mongodb+srv://brianbsstt:${process.env.MONGO_PASSWORD}@nodejs-learn.p3j2bdk.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },

  console.log("connected")
);

module.exports = app;
