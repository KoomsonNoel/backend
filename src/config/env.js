// src/config/env.js
import dotenv from "dotenv";

dotenv.config(); // Load from .env

// Validate required environment variables
const requiredEnv = ["GEMINI_API_KEY"];
requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    console.error(`❌ Environment variable ${key} is missing`);
    process.exit(1);
  }
});

export const ENV = {
  PORT: process.env.PORT || 8080,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  NODE_ENV: process.env.NODE_ENV || "development"
};

export const isProduction = ENV.NODE_ENV === "production";
