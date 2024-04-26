const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  // const authHeader = req.headers.authorization || req.headers.Authorization;
  // if (!authHeader?.startsWith('Bearer ')) return res.status(401).json({ message: 'Unauthorized' })
  // const token = authHeader.split(' ')[1];
  const token = req.cookies.jwt;
  console.log(token);
  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Forbidden" }); //invalid token
    req.user = decoded.UserInfo.username;
    req.userId = decoded.UserInfo._id;
    req.isCreator = decoded.UserInfo.isCreator;
    next();
  });
};

module.exports = verifyJWT;
