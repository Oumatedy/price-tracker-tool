// src/utils/ai.js
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // Store your key in .env
  dangerouslyAllowBrowser: true, // Only if you are running in the browser (not recommended for production)
});

export async function getAIInsights(products) {
  const prompt = `
    Given the following product data:
    ${JSON.stringify(products.slice(0, 10))} 
    1. Predict which products are likely to increase in price soon.
    2. Suggest the best supplier for each product (if supplier info is present).
    3. Identify any trending products.
    Respond in a concise, user-friendly way.
  `;
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 300,
  });
  return response.data.choices[0].message.content;
}