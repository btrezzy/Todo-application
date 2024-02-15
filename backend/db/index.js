const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://niraj:Niraj%407860@cluster0.b6c9t3k.mongodb.net/todos")

const todoSchema=new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=new mongoose.model("todo",todoSchema);

module.exports={
    todo,
}