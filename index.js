const express=require('express');
const path=require('path');
const app=express();
const port=4000;

app.use(express.static('./view'))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/index.html'))
})
app.use('/contactus',(req,res,next)=>{ 
    res.sendFile(path.join(__dirname,'./view/contact.html'))
})

app.use('/success',(req,res,next)=>{
   res.sendFile(path.join(__dirname,'./view/success.html'))
})

app.listen(port,()=>{
    console.log(`server is listning on port http://localhost:${port}`);
})