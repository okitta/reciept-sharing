const { createComment, getCommentById,getCommentByRecipeId,getCommentByUserId,updateComment,deleteComment } = require('../controllers/comments.controller');

// Import the function or module you want to test

// Test case for adding a comment
test('Add a comment', () => {
    // Arrange
    const comment = 'This is a test comment';

    // Act
    const result = createComment(comment);

    // Assert
    expect(result).toBeTruthy();
});

// Test case for getting comments
test('Get comments by id', () => {
    // Arrange

    // Act
    const result = getCommentById(1);

    // Assert
    expect(result).toHaveLength(3); // Assuming there are 3 comments in the system
});

// Test case for getting comments by recipe id
test('Get comments by recipe id', () => {
    // Arrange

    // Act
    const result = getCommentByRecipeId(1);

    // Assert
    expect(result).toHaveLength(1); // Assuming there are 2 comments for a recipe
});

// Test case for getting comments by user id
test('Get comments by user id', () => {
    // Arrange

    // Act
    const result = getCommentByUserId(1);

    // Assert
    expect(result).toHaveLength(1); // Assuming there are 2 comments by a user
});

// Test case for updating a comment
test('Update a comment', () => {
    // Arrange
    const comment = 'This is an updated comment';

    // Act
    const result = updateComment(1, comment);

    // Assert
    expect(result).toBeTruthy();
});

// Test case for deleting a comment

test('Delete a comment', () => {
    // Arrange

    // Act
    const result = deleteComment(1);

    // Assert
    expect(result).toBeTruthy();
});