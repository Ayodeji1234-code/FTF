import express from "express";
import cors from "cors";
import "dotenv/config";

import contactRoutes from "./routes/contactRoutes";

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Contact route
app.use("/api", contactRoutes);

// Health check
app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Favored Tribe Foundation API is running",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Favored Tribe Foundation API running on port ${PORT}`);
});