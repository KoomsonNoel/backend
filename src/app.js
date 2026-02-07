// src/app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Routes
import chatRoutes from "./routes/chat.routes.js";

// Load environment variables
dotenv.config();

const app = express();

/* =======================
   Trust proxy (RENDER)
======================= */
app.set("trust proxy", 1);

/* =======================
   Global Middleware
======================= */
app.use(
  cors({
    origin: "*", // OK for now; restrict later if needed
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(express.json({ limit: "10kb" }));

/* =======================
   Health Check
======================= */
app.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    service: "Koomson AI Backend",
    environment: process.env.NODE_ENV || "development"
  });
});

/* =======================
   Routes
======================= */
app.use("/api/chat", chatRoutes);

/* =======================
   404 Handler
======================= */
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

/* =======================
   Error Handler
======================= */
app.use((err, req, res, next) => {
  console.error("🔥 Backend Error:", err.message);

  res.status(err.status || 500).json({
    error: err.message || "Internal server error"
  });
});

export default app;
