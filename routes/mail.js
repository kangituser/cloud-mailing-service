const router = require('express').Router();
const mailController = require('../controllers/mail');

// POST => /mail/send
router.post('/send', mailController.sendEmail);

module.exports = router;