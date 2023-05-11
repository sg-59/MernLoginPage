const express=require('express')
const app=express();
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
const userdetails=require('./router/user')
const authdetails=require('./router/auth')


dotenv.config()
app.use(cors())

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('databse are connected');
}).catch((err)=>{
    console.log('error',err);
}) ;
app.use(express.json());
app.use('/api/ussers',userdetails);
app.use('/api/autths',authdetails);
app.listen(5000,()=>{
    console.log('port 5000 is connected');
})