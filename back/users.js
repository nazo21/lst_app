const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Occupation should be selection
const users = new Schema({
    email:{
        type: String,
    },

    number:{
        type: Int32Array
    },

    FirstName:{
       type: String,
       require: true
    },

    LastName:{
        type: String,
        require: true
    },

    Occupation:{
        type: String,
        require: false
    },

    password:{
        type: Int32Array,
        required: true
    }

});