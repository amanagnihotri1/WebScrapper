const express=require('express');
const scrape=require("./controller/scrape");
const cors = require('cors');
const app=express();
app.use(cors());
app.use("/:user",scrape);
app.get("/",(req,res)=>
{
    res.send("API is Working Successfully");
})
app.listen(process.env.PORT || 5000,()=>
{
    console.log("backend server is up and working fine");
})