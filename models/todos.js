import mongoose from 'mongoose';
  const { Schema } = mongoose;

  const todosSchema = new Schema({
    title:  String, 
    description: String,
    status:   Boolean
  });

  module.exports=mongoose.model("todos",todosSchema);