import User from '../models/User.js';
import bcrypt from 'bcrypt';

const signup = async (req,res) => {
    const {email, pwd} = req.body;
    if(!email || !pwd) return res.sendStatus(400).json({'message': 'Email or password is required'});
    const duplicate = await User.findOne({email:email});
    if(duplicate) return res.sendStatus(409).json({'message': 'Email already exists'});
    try{
        const hashedPwd = await bcrypt.hash(pwd, 10);
        const newUser = new User({
            email,
            password: hashedPwd
        })
        await newUser.save();
        // await User.create({email, password:hashedPwd});
        res.sendStatus(201).json({message: 'sign up successful, please login'})
    }catch(err){
        console.error(err);
        res.sendStatus(500).json({message: `error occurred ${err.message}`})
    }
}

export default signup;