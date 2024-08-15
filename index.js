require("dotenv").config();
const { OpenAI, AzureOpenAI } = require("openai");

const systemPrompt = "Hello, how are you?";

const getModelConfig = () => {
  if (process.env.OPENAI_API_KEY) {
    return {
      model: "gpt-4o-mini",
      client: new OpenAI({ apiKey: process.env.OPENAI_API_KEY }),
    };
  } else if (process.env.AZURE_OPENAI_API_KEY && process.env.AZURE_OPENAI_ENDPOINT && process.env.AZURE_OPENAI_DEPLOYMENT) {
    const deployment = process.env.AZURE_OPENAI_DEPLOYMENT;
    const apiVersion = "2024-07-01-preview";
    return {
      client: new AzureOpenAI({ deployment, apiVersion }),
    };
  }
};

const completions = async (prompt) => {
  const { model, client } = getModelConfig();

  return await client.chat.completions.create({
    model,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: prompt },
    ],
    temperature: 0.2,
    top_p: 0.1,
  });
};

async function main() {
  try {
    const userPrompt = "Tell me a joke about programming.";
    const response = await completions(userPrompt);
    console.log(response.choices[0].message.content);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
