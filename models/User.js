const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: String,
  email: { 
      type: String, 
      required: true },
  password: { 
      type: String, 
      required: true },
  phone: {
    type: Number,
    required: true,
  },
  picture: {
    type: String,
    default:''
},
});

module.exports = User = model("user", UserSchema);