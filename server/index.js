import express from "express";
import env from "dotenv";
import axios from "axios";
import cors from "cors";
// const cors = require("cors");

env.config();

const server = express();
server.use(cors());

server.use(express.json());

server.post("/analyze-image", async (req, res) => {
  try {
    const { imageUrl } = req.body;

    const apiKey = process.env.API_KEY;
    const apiEndpoint = process.env.API_ENDPOINT;

    const response = await axios.post(
      `${apiEndpoint}`,
      {
        Url: imageUrl,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Prediction-Key": apiKey,
        },
      }
    );

    const responseData = response.data;

    res.json(responseData);
  } catch (error) {
    console.log("Error processing image:", error);
    console.log("Response data:", error.response.data);
    res
      .status(500)
      .json({ message: "Error processing image", error: error.response.data });
  }
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
