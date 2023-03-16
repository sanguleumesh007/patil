const express=require('express');
const app=express();
const path=require('path')
const mysql=require('mysql');

const connection = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:"PhantomUS@2000",
    database:'test'

});
connection.connect((err)=>{
    if(err){
        console.log("err", err);
        throw err;
    }
    console.log("Connectiion done")
    
})
var q="SELECT * FROM movies ;"
connection.query(q, function(err,result){
    if(err) throw err;
    console.log(result);
})

app.set('view engine','ejs');
// console.log(app.get(__dirname,'ejs'))


app.get('/',(req,res)=>{
    res.render('home',({
        title:"fdkjgfdjghf"
    }))
})
app.get('/about',(req,res)=>{
    res.render('about',({
        title: "HIIII"
    }))
})

// app.get('/download',(req,res)=>{
//     res.download(path.join(__dirname,'home.html'))
// })


app.listen(8000,()=>{
    console.log("Server is listening ")
})