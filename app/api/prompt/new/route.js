import Prompt from "@/models/prompt";
import { connectDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const {userId, prompt, tag } = await req.json(); // Corrected the typo here

    try {
        await connectDB();
        const newPrompt = new Prompt({
            // creator: userId,
            prompt, // Corrected the typo here
            tag
        });
        await newPrompt.save();
        return new NextResponse(JSON.stringify(newPrompt), { status: 201 });
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify("Failed to create new Prompt!"), { status: 500 });
    }
};
