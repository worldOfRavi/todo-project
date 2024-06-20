// models/Item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority:{
    type:String,
    enum:[
      "High",
      "Mid",
      "Low",
    ],
    required:true
  },
  dueDate:{
    type:Date,
    required:true
  },
  status:{
    type:String,
    enum:[
      "Todo",
      "InProgress",
      "InReview",
      "Completed"
    ],
    required:true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
},{timestamps:true});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
