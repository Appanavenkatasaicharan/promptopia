import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : [true,"Must provide a email"],
        unique : [true,"Email must be unique"]
    },
    username : {
        type : String,
        required: [true, 'Username is required!'],
      },
      image: {
        type: String, 
      },
      userID : {
        type : String,
        required : [true,"Id is required"],
        unique : [true,"ID must be unique"]
      }
    });
    
    const User = mongoose.models.User || mongoose.model("User", userSchema);
    
    export default User;