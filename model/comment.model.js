const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

//create a new comment
const createComment = async (comment) => {
    return await prisma.comment.create({
        data: comment
    })
}

//get a specific comment by id

const getCommentById = async (id) => {
    return await prisma.comment.findUnique({
        where: {
            id: id
        }
    })
}

//get specific comment by user id

const getCommentByUserId = async (userId) => {
    return await prisma.comment.findMany({
        where: {
            userId: userId
        }
    })
}

//get specific comment by recipe id

const getCommentByRecipeId = async (recipeId) => {
    return await prisma.comment.findMany({
        where: {
            recipeId: recipeId
        }
    })
}

//update comment by id and user id

const updateComment = async (id, comment) => {
    return await prisma.comment.update({
        where: {
            id: id
        },
        data: comment
    })
}

//delete comment by id

const deleteComment = async (id) => {
    return await prisma.comment.delete({
        where: {
            id: id
        }
    })
}

module.exports = {
    createComment,
    getCommentById,
    getCommentByUserId,
    getCommentByRecipeId,
    updateComment,
    deleteComment
}