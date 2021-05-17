var express=require("express");

var parser=require("body-parser")

var app=express();
app.use(parser.urlencoded({
    extended:true
}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")

})
app.post("/posts",(req,res)=>{
    
    
 
    var height=parseFloat(req.body.height);
    var weight=parseInt(req.body.weight);
    var result=weight/(height*height);
    res.send("result is  "+result);
    

})
app.listen(3000,()=>{
    console.log("server has started on port 3000")
});



