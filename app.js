'use strict';


/**
 * node modules
 */
const cors = require('cors');
const cookieParser = require('cookie-parser');


// Initial express app
const express = require('express');
const app = express();


app.listen(5000, () => {
    console.log(`Server listening at http://localhost:5000`);
});