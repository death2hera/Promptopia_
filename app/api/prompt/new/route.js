import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { useSession } from "next-auth/react";

export const POST = async (request) => {
    const { prompt, tag, userId } = await request.json();


    try {
        await connectToDB();
        console.log(userId)
        const newPrompt = new Prompt({ prompt, tag, creator: userId });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        console.error("Error creating new prompt:", error); 
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}