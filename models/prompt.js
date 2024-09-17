import { Schema, model, models } from "mongoose";


const propmtSchema = new Schema({
    prompt : {
        type: String,
        required: [true, "Prompt is required!"]
    },
    tag : {
        type: String,
        required: [true, "Tag is required!"]
    }
})
const Prompt = models.Prompt || model('Prompt', propmtSchema);
export default Prompt;