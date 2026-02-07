import axios from "axios";
import { koomsonPrompt } from "../prompts/koomson.prompt.js";

const API_URL = "https://openrouter.ai/api/v1/chat/completions";

const openrouterService = {
  async generateResponse(userMessage) {
    const response = await axios.post(
      API_URL,
      {
        model: "openai/gpt-4o-mini",
        messages: [
          { role: "system", content: koomsonPrompt },
          { role: "user", content: userMessage }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.choices[0].message.content;
  }
};

export default openrouterService;
