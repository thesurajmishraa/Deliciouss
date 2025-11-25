import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are 'Chef Genius', the AI food assistant for the 'Delicious' food delivery app. 
Your goal is to help customers choose a meal from our specific menu.
Be short, punchy, and appetizing in your descriptions.
Do not recommend items that are not on the menu.

Here is our current Menu Data:
${JSON.stringify(MENU_ITEMS.map(item => ({ name: item.name, category: item.category, desc: item.description, price: item.price })))}

If a user asks for a recommendation, suggest 2-3 items from the menu based on their query (e.g., spicy, vegetarian, sweet).
Always be polite and enthusiastic about food.
`;

export const getChefRecommendation = async (userQuery: string, history: string[] = []): Promise<string> => {
  try {
    const chatHistory = history.map(msg => ({ role: 'user', parts: [{ text: msg }] })); // Simplified history for this demo

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        ...chatHistory,
        { role: 'user', parts: [{ text: userQuery }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 300, 
      }
    });

    return response.text || "I'm having trouble checking the kitchen right now. Why not try our Butter Chicken?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently offline, but I highly recommend the Margherita Pizza!";
  }
};
