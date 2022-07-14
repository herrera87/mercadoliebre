const express =require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("users");
});

router.get("/users/create",(req,res)=>{
    res.send("user create");
});

router.get("/update",(req,res)=>{
    res.send("user update");
});

module.express=router;