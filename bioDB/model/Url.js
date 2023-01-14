import mongoose from "mongoose";
import nanoid from "nanoid"


const UrlSchema = new mongoose.Schema({
    Url:{
        type: String,
        required:[ true , "Url is required" ]
    },
    shortUrl:{
        type: String
    }
    
})



UrlSchema.pre("save" , function(next){
    this.shortUrl = nanoid(4);
    next()
})
const Url = mongoose.model("Url" , UrlSchema)

export default Url;