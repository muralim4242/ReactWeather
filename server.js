var express=require("express");

const app=express();
var PORT=process.env.PORT ||3000;

app.use(function(req,response,next)
{
  if(req.headers['x-forwarded-proto']==='http')
  {
    next();
  }
  else {
    res.redirect("http://"+req.hostname +req.url);
  }
});

app.use(express.static("public"));

app.listen(PORT,function()
{
  console.log("server is up running on port "+ PORT);
})
