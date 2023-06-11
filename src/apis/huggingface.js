import { HfInference } from "@huggingface/inference";
import { hfToken, modelName } from "../utils/config";

const hf = new HfInference(hfToken);

export async function getImage(prompt, neg_prompt) {
  const blob = await hf.textToImage({
    prompt,
    parameters: {
      negative_prompt: neg_prompt,
    },
    model: modelName,
    options: {
      wait_for_model: true,
      use_gpu: true,
    },
  });
  console.log(blob);
  return URL.createObjectURL(blob);
}
