/**
 * @license Apache-2.0
 * @copyright scovings 2025
 */

'use strict';


/**
 * Node modules
 */
const router = require('express').Router();


/**
 * Custom modules
 */
const { login } = require('../controllers/login.controller')


router.get('/', login);


module.exports = router;