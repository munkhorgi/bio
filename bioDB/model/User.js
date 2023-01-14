import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required:[ true , "User is required" ]
    },
    pass:{
        type: String
    }
    
})

const User = mongoose.model("User" , UserSchema)
export default User;