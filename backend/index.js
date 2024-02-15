const express=require('express');
const app=express();
const {createTodo,updateTodo}=require("./types");
const { todo } = require('./db');
const cors=require("cors");

app.use(cors());
app.use(express.json());


app.post("/todo",async (req,res)=>{

    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"Wrong inputs"
        })
        return ;
    }

    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })

    res.status(200).json({
        msg:"Todo created!"
    })

})


app.get("/todos",async (req,res)=>{
    const todos=await todo.find({});
    res.json({
        todos,
    })
})

app.put("/completed", async (req,res)=>{
         const updatePayload=req.body;
         const parsedPayload=updateTodo.safeParse(updatePayload);
         
         if(!parsedPayload.success){
            req.status(411).json({
                msg:"Invalid input"
            })
            return;
         }

        await todo.update({
            _id:updatePayload.id
        },{
            completed:true
        })

        res.json({
            msg:"Marked todo as completed"
        })


})

app.listen(3000,()=>{
    console.log("Server running at 3000");
})