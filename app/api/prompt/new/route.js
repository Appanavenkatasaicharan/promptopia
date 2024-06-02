import Prompt from "@models/prompt";
import User from "@models/user";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userID, prompt, tag } = await request.json();

    try {
        await connectToDB();
        const user = await User.findOne({userID});
        console.log(user);
        const newPrompt = new Prompt({ creator: user._id, prompt, tag });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}
