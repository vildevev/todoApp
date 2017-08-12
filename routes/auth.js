const express = require('express'),
	passport = require('passport'),
	router = express.Router();

/* GET home page. */
router.get('/facebook', passport.authenticate('facebook', {
	scope: ['public_profile', 'email', 'user_friends']
	})
});

router.get('/facebook/callback', passport.authenticate('facebook', {
	successRedirect: '/',
	failureRedirect: '/login'
	})
);

router.get('/logout', function(req, res) {
	req.session = null;
	res.send('');
});

module.exports = router;
