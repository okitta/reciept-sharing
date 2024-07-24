const Recipe = require('../model/reciep.model');

//create a new recipe
const createRecipe = async (req, res) => {
    try {
        const newRecipe = await Recipe.createRecipe(req.body);
        res.status(201).send(newRecipe);
    } catch (error) {
        res.status(400).send(error);
    }
}

//get all recipes
const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.getRecipes();
        res.status(200).send(recipes);
    } catch (error) {
        res.status(400).send(error);
    }
}

//get a specific recipe by id

const getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.getRecipeById(req.params.id);
        if (!recipe) {
            return res.status(404).send('Recipe not found');
        }
        res.status(200).send(recipe);
    } catch (error) {
        res.status(400).send(error);
    }
}

// get recipes by user id
const getRecipeByUserId = async (req, res) => {
    try {
        const recipes = await Recipe.getRecipeByUserId(req.params.userId);
        res.status(200).send(recipes);
    } catch (error) {
        res.status(400).send(error);
    }
}

//update recipe by id
const updateRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.getRecipeById(req.params.id);
        if (!recipe) {
            return res.status(404).send('Recipe not found');
        }
        const updatedRecipe = await Recipe.updateRecipe(req.params.id, req.body);
        res.status(200).send(updatedRecipe);
    } catch (error) {
        res.status(400).send(error);
    }
}

//delete recipe by id

const deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.getRecipeById(req.params.id);
        if (!recipe) {
            return res.status(404).send('Recipe not found');
        }
        await Recipe.deleteRecipe(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    createRecipe,
    getRecipes,
    getRecipeById,
    getRecipeByUserId,
    updateRecipe,
    deleteRecipe
}