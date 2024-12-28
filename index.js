import express from 'express';

const app = express();

app.get("/", (req,res)=>{
    res.send("Hii this is the home page!!!!")
})

app.listen(3000, ()=> console.log("server started on port 3000"));
