const express = require('express');
const router = express.Router();

const authRouter = require('./auth.route');
const listsRouter = require('./lists.route');
const moviesRouter = require('./movies.route');
const seriesRouter = require('./series.route');
const wichlistsRouter = require('./wichlists.route');
const usersRouter = require('./users.route');
const genreRouter = require('./genres.route');
const subscribtionsRouter = require('./subscribtions.route');



//================== Routes ======================
router.use('/auth', authRouter);
router.use('/lists',listsRouter);
router.use('/movies',moviesRouter);
router.use('/series',seriesRouter);
router.use('/wichlists',wichlistsRouter);
router.use('/users', usersRouter);
router.use('/genres', genreRouter);
router.use('/subscribtions', subscribtionsRouter);
//================================================

module.exports = router;