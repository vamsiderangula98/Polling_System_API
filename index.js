const express=require('express');
const port=8000;
const app=express();


app.get('/',function(req,res){
    console.log(req);
res.send('<h1>t is running succesfully</h1>');
});


app.listen(port,function(err){
    if(err){
        console.log("Error in running Express Server",err);
    }
    console.log("My Express Server is running on port:",port);
});