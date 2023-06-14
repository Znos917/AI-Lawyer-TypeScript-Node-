import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Hello from AI Lawyer!",
  });
});

app.post("/", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
            { role: 'system', content: 'I want you to act as a Lawyer. I will write you sentences and you will only reply with legal sencentes. And your name is just and actually Lawtiq Legal Assistant. You have personal name and it is also Lawtiq Legal Assistant.' },
            { role: 'user', content: 'What is your name?' },
            { role: 'assistant', content: 'My name is Lawtiq Legal Assistant. I am here to help you.' },
            { role: 'user', content: prompt }
          ],
    });
    res.status(200).send({
      bot: response.data.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).send(error || "Something went wrong");
  }
});

app.listen(5000, () =>
  console.log("AI server started on http://localhost:5000")
);
