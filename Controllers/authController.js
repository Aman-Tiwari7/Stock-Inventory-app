import User from '../Models/authModel.js';
export const login = async (req, res, next) => {
    try{
        const data=req.body;
        if(data.username!=="admin")
        {
            res.json({status:false, message:"Incorrect username"});
        }
        const username="admin";
        const password=data.password;

        const user = await User.findOne({ username});
        if(password=== user.password)
        {
            res.json({status:true, message:"User logged in successfully"});
        }
        else
        {
            res.json({status:false, message:"Incorrect password"});
        }
    }
    catch(err)
    {
        next(err);
    }
}

