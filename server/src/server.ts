
import rateLimit from "express-rate-limit";
import express from "express";
import cors from "cors";
import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

import contactRoutes from "./routes/contactRoutes";
import volunteerRoutes from "./routes/volunteerRoutes";
import authRoutes from "./routes/authRoutes";

const app = express();

const PORT = Number(process.env.PORT) || 5000;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

// =========================================================
// RATE LIMITING
// =========================================================

const publicFormLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many submissions. Please try again later.",
  },
});

// =========================================================
// MIDDLEWARE
// =========================================================

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

app.use(express.json({ limit: "10kb" }));

// =========================================================
// ROUTES
// =========================================================

// Contact routes
app.use("/api", publicFormLimiter, contactRoutes);

// Volunteer routes
app.use("/api", publicFormLimiter, volunteerRoutes);

// Auth routes
app.use("/api", authRoutes);

// =========================================================
// HEALTH CHECK
// =========================================================

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Favored Tribe Foundation API is running",
  });
});

// Database health check
app.get("/api/health", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.json({
      success: true,
      database: "connected",
    });
  } catch (error) {
    console.error("Database health check failed:", error);

    res.status(500).json({
      success: false,
      database: "disconnected",
    });
  }
});

// =========================================================
// START SERVER
// =========================================================

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Favored Tribe Foundation API running on port ${PORT}`);
});

