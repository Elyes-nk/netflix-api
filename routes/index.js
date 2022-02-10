const express = require('express');
const router = express.Router();

const authRouter = require('./auth.route');
const listsRouter = require('./lists.route');
const moviesRouter = require('./movies.route');
const seriesRouter = require('./series.route');
const usersRouter = require('./users.route');
const genreRouter = require('./genres.route');
const subscribtionsRouter = require('./subscribtions.route');
const transactionsRouter = require('./transactions.route');
const checkoutRouter = require('./checkout.route');
const webHooksRouter = require('./webhooks.route');


//================== Routes ======================
router.use('/auth', authRouter);
router.use('/lists',listsRouter);
router.use('/movies',moviesRouter);
router.use('/series',seriesRouter);
router.use('/users', usersRouter);
router.use('/genres', genreRouter);
router.use('/subscribtions', subscribtionsRouter);
router.use('/transactions', transactionsRouter);
router.use('/checkout',checkoutRouter);
router.use('/webhooks',webHooksRouter);

//================================================

module.exports = router;