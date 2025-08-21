import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import verifyJWT from '../middleware/verifyJWT.js';


export const login = async (req,res) => {
    try{
    const {email,pwd} = req.body;
    if(!email || !pwd) return res.sendStatus(400).json({"message":"Email or password is required"});

    const user = await User.findOne({email});
    if(!user) return res.statusCode(401).json({"message":"Email is incorrect"});


    const isMatch = await bcrypt.compare(pwd,user.password);
    if(!isMatch) return res.sendStatus(401).json({"message":"Invalid password"});

    const accessToken = jwt.sign(
        {id:user.id},
        process.env.JWT_ACCESS_SECRET,
        {expiresIn:'15m'}
    );

   const refreshToken = jwt.sign(
       {id:user.id},
       process.env.JWT_REFRESH_SECRET,
       {expiresIn:'7d'}
   );

   res.cookie('refreshToken', refreshToken, {
       httpOnly: true,
       secure:false,
       sameSite:'lax',
       maxAge: 7*24*60*60*1000
   }).sendStatus(200).json({
       "message":"Successfully logged in",
       accessToken,
       user: {
           id: user.id,
           email: user.email
       }
    });


}catch(err) {
        console.error(err);
        res.sendStatus(500).json({"message":"error in server login"});
    }
};

export default login;