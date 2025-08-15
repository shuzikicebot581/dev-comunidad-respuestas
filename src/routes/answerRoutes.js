const express = require('express');
const Answer = require('../models/Answer');
const router = express.Router();

router.post('/', async (req, res) => {
    const { questionId, body, author } = req.body;
    const newAnswer = new Answer({ questionId, body, author });
    await newAnswer.save();
    res.status(201).send('Respuesta añadida exitosamente');
});

router.get('/:questionId', async (req, res) => {
    const answers = await Answer.find({ questionId: req.params.questionId });
    res.json(answers);
});

module.exports = router;