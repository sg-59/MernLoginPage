const router =require('express').Router();
const user=require('../models/user')


router.get('/',async (req,res)=>{
    try{
        const users=await user.find()
        res.status(200).json(users)
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports=router;