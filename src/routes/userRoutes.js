const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).send('Usuario registrado exitosamente');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && user.password === password) {
        res.send('Inicio de sesión exitoso');
    } else {
        res.status(401).send('Credenciales inválidas');
    }
});

module.exports = router;