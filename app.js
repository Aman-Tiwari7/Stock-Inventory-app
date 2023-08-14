import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config'
import stockRouter from './Routes/stockRoutes.js';
import authRouter from './Routes/authRoutes.js';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

const app=express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'./client/build')));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
});

mongoose.connect(process.env.MONGO_URL, {
    useNewURLParser:true,
    useUnifiedTopology:true
}).then(()=>
{
    console.log("DB Connection Successful");
}).catch((err)=>
{
    console.log(err.message);
});

app.listen(process.env.PORT,()=>{
    console.log("Server running");
});

app.use('/api/stock',stockRouter);
app.use('/api/auth',authRouter);

