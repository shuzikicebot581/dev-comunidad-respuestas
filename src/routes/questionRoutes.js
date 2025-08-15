const express = require('express');
const Question = require('../models/Question');
const router = express.Router();

router.post('/', async (req, res) => {
    const { title, body, author } = req.body;
    const newQuestion = new Question({ title, body, author });
    await newQuestion.save();
    res.status(201).send('Pregunta publicada exitosamente');
});

router.get('/', async (req, res) => {
    const questions = await Question.find();
    res.json(questions);
});

module.exports = router;