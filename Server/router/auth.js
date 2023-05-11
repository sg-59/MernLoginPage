


const router = require("express").Router();
const usser = require("../models/user");
const Cryptojs=require('crypto-js')
const JsonwebToken=require('jsonwebtoken')





router.post('/sign',async (req,res)=>{

  console.log('data ?',req.body);
    const newuser=new usser({
        username:req.body.username,
        email:req.body.email,
      
     password:Cryptojs.AES.encrypt(req.body.password,process.env.CRYPTO_JS).toString(),
    });
    try{
        const saveduser= await newuser.save();
        console.log('savedUser',saveduser);
        res.status(201).json(saveduser)
    }catch(err){
        res.status(500).json(err)
    }
})



router.post("/login", async (req, res) => {
console.log('login data ?',req.body);
  try {
const newuser=await usser.findOne({email:req.body.email})
console.log('newuser?',newuser);
!newuser && res.status(401).json('sorry please signup your account')

const hashedpassword=Cryptojs.AES.decrypt(newuser.password,process.env.CRYPTO_JS);

const orginalpassword=hashedpassword.toString(Cryptojs.enc.Utf8)
console.log('two password checking',orginalpassword,req.body.password);

orginalpassword !=req.body.password && res.status(401).json('invalid Password')

const accessToken=JsonwebToken.sign({
    id:newuser._id
},
process.env.JWT_SEC, 
{expiresIn:'1d'});
console.log('second time newuser',newuser._doc);
const {password,...others}=newuser._doc;

res.status(200).json({...others,accessToken})

  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports=router;
