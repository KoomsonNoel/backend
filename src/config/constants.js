// src/config/constants.js

export const API_CONSTANTS = {
  MAX_MESSAGE_LENGTH: 2000, // Max input length for chat
  MIN_MESSAGE_LENGTH: 3,    // Min input length
  RATE_LIMIT_WINDOW: 15 * 60 * 1000, // 15 minutes
  RATE_LIMIT_MAX: 100,      // Max requests per IP in window
};

export const BLOCKED_KEYWORDS = [
  "code", "program", "programming", "javascript", "python",
  "java", "c++", "c#", "php", "react", "node",
  "function", "loop", "array", "variable", "debug", "compile", "algorithm"
];
