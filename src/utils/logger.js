// src/utils/logger.js

const isProduction = process.env.NODE_ENV === "production";

export const logger = {
  info(message) {
    if (!isProduction) {
      console.log(`ℹ️  INFO: ${message}`);
    }
  },

  warn(message) {
    console.warn(`⚠️  WARN: ${message}`);
  },

  error(message, error = null) {
    console.error(`❌ ERROR: ${message}`);
    if (error) {
      console.error(error);
    }
  }
};
