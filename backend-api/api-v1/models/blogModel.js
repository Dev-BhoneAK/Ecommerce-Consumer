const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: String,
    image: String,
    tags: Array,
    description: String,
    publishedDate: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);
