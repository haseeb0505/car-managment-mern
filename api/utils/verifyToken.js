const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (!authHeader) {
        return res.status(401).json({ message: "you are not authenticated" });
    } else {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {

            if (err) {
                res.status(403).json({ message: "Token is not valid " });
            } else {
                req.user = user;
                next();
            }
        })
    }
}


module.exports = { verifyToken };