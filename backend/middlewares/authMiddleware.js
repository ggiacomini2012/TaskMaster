const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET || 'minha-chave-secreta';

exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).send('Token não fornecido');
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).send('Token inválido');
    }

    req.user = decoded;
    next();
  });
};
