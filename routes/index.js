const express = require('express');
const router = express.Router();

const authRouter = require('./auth.route');
const listsRouter = require('./lists.route');
const moviesRouter = require('./movies.route');
const usersRouter = require('./users.route');


//========== Routes =================
router.use('/auth', authRouter);
router.use('/lists',listsRouter);
router.use('/movies',moviesRouter);
router.use('/users', usersRouter);
//===================================

module.exports = router;