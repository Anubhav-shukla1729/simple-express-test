const express=require('express');

const app=express();
const PORT=3000;


app.get('/',function(req,res){
    res.send("hello world");
});

app.get('/name', async function(req,res){
    // let  s="";
    // for(let  i=0;i<10;i++){
    //     s=s+" Anubhav ";
    // }
    // await res.send(s);
    res.json({
        name4:"anubhav ",
    })
})

app.post('/home',function(req,res){
    res.send('welcome to home');
});

app.patch('/home',function(req,res){
    res.send("this is a patch");
})


app.listen(PORT,function fn(){
    console.log("server running at 3000");
});