const router = require("express").Router();
const user = require("../models/user");
const Cryptojs=require('crypto-js')
const JsonwebToken=require('jsonwebtoken')

router.post('/sign',async (req,res)=>{
    const newuser=new user({
        username:req.body.username,
        email:req.body.email,
        password:Cryptojs.AES.encrypt(req.body.password,process.env.CRYPTO_JS).toString(),
    });
    try{
        const saveduser= await newuser.save()
        res.status(200).json(saveduser)
    }catch(err){
        res.status(500).json(err)
    }
})



router.post("/login", async (req, res) => {

  try {
const newuser=await user.findOne({email:req.body.email})
!newuser && res.status(401).json('sorry please signup your account')

const hashedpassword=Cryptojs.AES.decrypt(user.password,process.env.CRYPTO_JS);

const orginalpassword=hashedpassword.toString(Cryptojs.enc.Utf8)

orginalpassword !=req.body.password && res.status(401).json('invalid Password')

const accessToken=JsonwebToken.sign({
    id:user._id
},
process.env.JWT_SEC,
{expiresIn:'1d'});

const {password,...others}=user._doc;
res.status(200).json({...others,accessToken})

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports=router;
