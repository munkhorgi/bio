import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required:[ false , "User is required" ]
    },
    pass:{
        type: String
    },
    username: {
        type: String ,
    }
})

const User = mongoose.model("User" , UserSchema)
export default User;