import {connectToDB} from "@utils/database";
import User from "@models/user";

export const POST = async  (req)=>{
    const {userID,email,username,image} = await req.json()
    try {
        await connectToDB();
        const userExists = await User.findOne({ userID,email });
        if (!userExists) {
          const user = await User.create({
            userID : userID,
            email: email,
            username: username.replace(" ", "").toLowerCase(),
            image: image,
          });
          return new Response(JSON.stringify({id:user._id}),{status:200})
        }
        return new Response(JSON.stringify({id:userExists._id}),{status:200})
      } catch (error) {
        console.log("Error checking if user exists: ", error);
        return new Response("Error",{status:200})
      }
    return new Response("Created",{status:200})
}