const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const user = require('./routes/users.routes');
const recipe = require('./routes/recipe.routes');
const comment = require('./routes/comment.routes');

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/users', user);
app.use('/recipes', recipe);
app.use('/comments', comment);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});