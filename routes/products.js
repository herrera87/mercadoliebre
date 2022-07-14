const express =require("express");
const router = express.Router();

router.get("/products/create",(req,res)=>{
    res.send("product create");
});

router.get("/products/update",(req,res)=>{
    res.send("product update");
});

module.express=router;