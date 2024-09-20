import Prompt from "@/models/prompt";
import { connectDB } from "@/utils/database";


export const GET = async (req) => {
    try {
        await connectDB();
        const prompts = await Prompt.find({});
        
        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        console.error(error); // Log the error for debugging
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
};