import express from "express";
import cors from "cors";

const app=express();
app.use(cors());
app.use(express.json());

app.get("/api/hello",(req,res)=>res.json({ok:true,msg:"Hello from Bootcamp API!"}));

app.listen(3000,()=>console.log("API on 3000"));
