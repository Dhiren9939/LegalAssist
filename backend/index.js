import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error("GEMINI_API_KEY is not defined");
  process.exit(1);
}

app.post("/api/chat", async (req, res) => {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`,
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": GEMINI_API_KEY,
        },
      },
    );
    res.json(response.data);
  } catch {
    res.status(500).json({ error: "Failed to communicate with Gemini" });
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
