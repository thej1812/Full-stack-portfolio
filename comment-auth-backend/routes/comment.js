const express = require('express');
const jwt = require('jsonwebtoken');
const Comment = require('../models/Comment');
const router = express.Router();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.sendStatus(401);
  const token = authHeader.split(' ')[1];
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (err) {
    res.sendStatus(403);
  }
};

router.post('/', verifyToken, async (req, res) => {
  const comment = new Comment({
    content: req.body.content,
    user: req.user.id,
    username: req.user.username,
  });
  await comment.save();
  res.json(comment);
});

router.get('/', async (req, res) => {
  const comments = await Comment.find().sort({ createdAt: -1 });
  res.json(comments);
});

module.exports = router;
