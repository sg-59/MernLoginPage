const router =require('express').Router();
const usser=require('../models/user')


router.get('/', async (req,res)=>{
    try{
        const users=await usser.find()
        res.status(200).json(users)
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports=router;