// Will showcase tasks etc
const express = require('express');
//const app = express();
//const port = 3000;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Creating Schema for my Tasks
// Need to refactor it 
const tasksSchema = new Schema({
  Task_ID:{
    type: Int16Array,
  },
  TaskName:{
    type: String,
    require: true
   },

   
});

module.exports =  mongoose.model("Lst",tasksSchema);
// methods with go here
// add
//edit
//delete
