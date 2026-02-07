import express from "express";
import chatController from "../controllers/chat.controller.js";
import validateInput from "../middleware/validateInput.js";

const router = express.Router();

router.post("/", validateInput, chatController.handleChat);

export default router;
