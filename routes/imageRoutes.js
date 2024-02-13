// backend/routes/imageRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const imageController = require('../controllers/imageController');

router.post('/upload', authMiddleware, imageController.uploadImage);

module.exports = router;
