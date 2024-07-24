const express = require('express');
const commentController = require('../controllers/comments.controller');
const router = express.Router();

// Create a new comment
router.post('/', commentController.createComment);

// get a specific comment by id
router.get('/:id', commentController.getCommentById);

// get comments by user id
router.get('/user/:userId', commentController.getCommentByUserId);

// get comments by recipe id
router.get('/recipe/:recipeId', commentController.getCommentByRecipeId);

// update comment by id
router.put('/:id', commentController.updateComment);

// delete comment by id
router.delete('/:id', commentController.deleteComment);

module.exports = router;
