const Comment = require('../model/comment.model');

//create a new comment
const createComment = async (req, res) => {
    try {
        const newComment = await Comment.createComment(req.body);
        res.status(201).send(newComment);
    } catch (error) {
        res.status(400).send(error);
    }
}


//get a specific comment by id

const getCommentById = async (req, res) => {
    try {
        const comment = await Comment.getCommentById(parseInt(req.params.id));
        if (!comment) {
            return res.status(404).send('Comment not found');
        }
        res.status(200).send(comment);
    } catch (error) {
        res.status(400).send(error);
    }
}

//get specific comment by user id

const getCommentByUserId = async (req, res) => {
    try {
        const comments = await Comment.getCommentByUserId(parseInt(req.params.userId));
        res.status(200).send(comments);
    } catch (error) {
        res.status(400).send(error);
    }
}

//get specific comment by recipe id

const getCommentByRecipeId = async (req, res) => {
    try {
        const comments = await Comment.getCommentByRecipeId(parseInt(req.params.recipeId));
        res.status(200).send(comments);
    } catch (error) {
        res.status(400).send(error);
    }
}

//update comment by id

const updateComment = async (req, res) => {
    try {
        const comment = await Comment.getCommentById(parseInt(req.params.id));
        if (!comment) {
            return res.status(404).send('Comment not found');
        }
        const updatedComment = await Comment.updateComment(parseInt(req.params.id), req.body);
        res.status(200).send(updatedComment);
    } catch (error) {
        res.status(400).send(error);
    }
}

//delete comment by id

const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.getCommentById(parseInt(req.params.id));
        if (!comment) {
            return res.status(404).send('Comment not found');
        }
        await Comment.deleteComment(parseInt(req.params.id));
        res.status(204).send();
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    createComment,
    getCommentById,
    getCommentByUserId,
    getCommentByRecipeId,
    updateComment,
    deleteComment
}