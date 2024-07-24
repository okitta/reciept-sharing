const express = require('express');
const recipeController = require('../controllers/recipe.controller');
const router = express.Router();

// Create a new recipe
router.post('/', recipeController.createRecipe);

// get all recipes
router.get('/', recipeController.getRecipes);

// get a specific recipe by id
router.get('/:id', recipeController.getRecipeById);

// get recipes by user id
router.get('/user/:userId', recipeController.getRecipeByUserId);

// update recipe by id
router.put('/:id', recipeController.updateRecipe);

// delete recipe by id
router.delete('/:id', recipeController.deleteRecipe);

module.exports = router;