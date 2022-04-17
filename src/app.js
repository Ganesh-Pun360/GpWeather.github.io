// My server
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
let port = process.env.PORT || 3000;

// public folder path
let publicPath= path.join(__dirname,"../public");
app.use(express.static(publicPath))

let partial_path = path.join(__dirname,'../templates/partials')

hbs.registerPartials(partial_path)

// templates_path
let templates_path = path.join(__dirname,'../templates/views')
console.log(templates_path);

app.set('view engine','hbs');
app.set('views',templates_path);

// This is Routing...
app.get("",(req,res)=>{
    res.render("");
});
app.get("/about",(req,res)=>{
    res.render("about")
});
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.render("404",{
        msg :"Opps!! Page Not Found"
    })
})

// Listening the server at port

app.listen(port,()=>{
    console.log(`server is running at port no. ${port}`);
})