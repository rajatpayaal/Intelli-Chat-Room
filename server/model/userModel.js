const mongoose = require("mongoose");


const userSchema  = new mongoose.Schema({

    username : {
        type : String, 
        required : true,
        min: 3,
        max: 20,
        unique : true,
    },
    email: {
        type: String,
        rrequired : true,
        max: 50,
        unique : true,

    },
    password: {
        type: String,
        rrequired : true,
        max: 50,
        min:8,

    },
    isAvatarImageSet:{
        type : Boolean,
        default : false,
    },
    avatarImage:{
        type: String,
        default: "",
    },
})

module.exports = mongoose.model("Users",userSchema);