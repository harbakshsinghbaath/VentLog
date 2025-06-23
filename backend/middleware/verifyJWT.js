import jwt from 'jsonwebtoken';

const verifyJWT = (req,res,next) => {
    const authHeader = req.headers['authorization'];
    if(!authHeader?.startsWith('Bearer')) return res.sendStatus(401).json({"message":"missing or invalid header"});
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err,decoded) => {
        if(err) return res.sendStatus(401).json({"message":"Invalid or expired token"});

        req.user = decoded.id;
        next();
    });
}

export default verifyJWT;