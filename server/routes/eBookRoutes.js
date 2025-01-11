const express = require("express");
const router = express.Router();

const { upload, getAllPosts } = require("./../controllers/eBooksController");

router.post("/posts/create", upload);
router.get("/posts", getAllPosts);

module.exports = router;
