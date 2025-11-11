import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

// ✅ Trending route
app.get("/api/trending", async (req, res) => {
  try {
    const response = await fetch(`${TMDB_BASE_URL}/trending/all/week`, {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`, // v4 token
        accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("TMDB Error:", errorText);
      return res.status(response.status).json({ error: "TMDB fetch failed" });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));