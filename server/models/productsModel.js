const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  image2: {
    type: String,
  },
  imageFile: {
    type: String,
  },
  imageFile2: {
    type: String,
  },
  details: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  featured: {
    type: String,
  },
  reviewsContent: [
    {
      username: {
        type: String,
      },
      review: {
        type: String,
      },
      stars: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("products", productSchema);
