const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    console.log(authorization);

    if (!authorization) {
        console.log(authorization);
        return res.status(401).send({ error: 'You must be logged in.' });
    }

    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, 'Secret_Key_BlueBananas', async (err, payload) => {
        if (err) {
            return res.status(401).send({ error: 'You must be logged in' });
        }
        const { userId } = payload;
        const user = await User.findById(userId);

        console.log(user);
        req.user = user;
        next();
    });

};