const express = require('express');
const router = express.Router();
const passport = require('passport');
const usersController = require('../controllers/userController');

router.get('/profile', passport.checkAuthentication ,usersController.profile);

router.get('/sign-in', usersController.singIn);
router.get('/sign-up', usersController.signUp);

router.post('/create', usersController.create);

// user view controller
router.post('/user-view', usersController.habitView);

// use passport as a middileware to authenticate
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'}
), usersController.createSession);

router.get('/sign-out', usersController.destroySession);

module.exports = router;