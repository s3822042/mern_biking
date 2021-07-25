const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require('validator')

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  profilePic: {
    type: Buffer
  },

  email: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if(!validator.isEmail(value)){
        throw new Error('Email is Invalid')
      }
    }
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  dateOfBirth: {
    type: Date,
    require: true,
    trim: true
  },

  address: {
    type: String,
    required: true,
    trim: true
  },

  mobileNo: {
    type: Number,
    required: true,
    trim: true,
    validate(value){
      if(value.toString().length() != 10){
        throw new Error('Mobile number must be of length 10')
      }
    }
  },

  createdAt: {
    type: Date,
    default: Date.now,
  }
  
});

module.exports = mongoose.model("users", UserSchema);
