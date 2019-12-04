const router = require('express').Router();

const controller = require('./controller');

// router method here
router.post(
    '/joke',
    controller.create
);

module.exports = router;
