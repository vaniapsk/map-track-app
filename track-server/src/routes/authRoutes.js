const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, 'Secret_Key_BlueBananas');
    res.status(200).send({ token });
    res.send('You made a post request', token);
  } catch (error) {
    return res.status(422).send(error.message);
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  console.log(req);
  if (!email || !password) {
    return res.status(422).send({ error: 'Must provide email and password' });
  }
  const user = await User.findOne({ email });

  if (!user) {
    res.status(422).send({ error: 'Invalid password or email' });
  }

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, 'Secret_Key_BlueBananas');
    res.status(200).send({ token });
  } catch (error) {
    return res.status(422).send({ error: 'Invalid password or email' });
  }
});

module.exports = router;
