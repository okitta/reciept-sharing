const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

//create a new recipe
const createRecipe = async (recipe) => {
    console.log(recipe);
    return await prisma.recipe.create({
        data: recipe
    })
}

//get a specific recipe by id

const getRecipeById = async (id) => {
    return await prisma.recipe.findUnique({
        where: {
            id: id
        }
    })
}

//get specific recipe by user id

const getRecipeByUserId = async (userId) => {
    return await prisma.recipe.findMany({
        where: {
            userId: userId
        }
    })
}

//update recipe by id and user id

const updateRecipe = async (id, recipe) => {
    return await prisma.recipe.update({
        where: {
            id: id
        },
        data: recipe
    })
}

//delete recipe by id

const deleteRecipe = async (id) => {
    return await prisma.recipe.delete({
        where: {
            id: id
        }
    })
}

module.exports = {
    createRecipe,
    getRecipeById,
    getRecipeByUserId,
    updateRecipe,
    deleteRecipe
}
