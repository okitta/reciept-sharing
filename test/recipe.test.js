const { createRecipe, getRecipeById,getRecipeByUserId,updateRecipe,deleteRecipe } = require('../controllers/recipe.controller');

// Import the necessary modules and functions


// Test the getIngredients function
// test('getIngredients should return an array of ingredients', () => {
//     // Arrange
//     const recipe = {
//         name: 'Chocolate Cake',
//         ingredients: ['flour', 'sugar', 'cocoa powder', 'baking powder', 'eggs', 'milk', 'vegetable oil'],
//     };

//     // Act
//     const ingredients = getIngredients(recipe);

//     // Assert
//     expect(ingredients).toEqual(['flour', 'sugar', 'cocoa powder', 'baking powder', 'eggs', 'milk', 'vegetable oil']);
// });

// test for get recipe by id
test('Get recipe by id', () => {
    // Arrange

    // Act
    const result = getRecipeById(1);

    // Assert
    expect(result).toBeTruthy();
}
);

// test for get recipe by user id
test('Get recipe by user id', () => {
    // Arrange

    // Act
    const result = getRecipeByUserId(1);

    // Assert
    expect(result).toBeTruthy();
}
);

// test for update recipe
test('Update a recipe', () => {
    // Arrange
    const recipe = 'This is an updated recipe';

    // Act
    const result = updateRecipe(1, recipe);

    // Assert
    expect(result).toBeTruthy();
}
);

// test for delete recipe
test('Delete a recipe', () => {
    // Arrange

    // Act
    const result = deleteRecipe(1);

    // Assert
    expect(result).toBeTruthy();
}
);

// test for create recipe

test('Create a recipe', () => {
    // Arrange
    const recipe = 'This is a test recipe';

    // Act
    const result = createRecipe(recipe);

    // Assert
    expect(result).toBeTruthy();
}
);