const express=require('express')
const app=express();
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
const authRouter=require('./router/auth')


dotenv.config()
app.use(cors())

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('databse are connected');
}).catch((err)=>{
    console.log('error',err);
}) ;


app.listen(4000,()=>{
    console.log('port 4000 is connected');
})