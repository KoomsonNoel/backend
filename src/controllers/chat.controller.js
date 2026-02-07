import openrouterService from "../services/openrouter.service.js";

const chatController = {
  async handleChat(req, res) {
    try {
      const reply = await openrouterService.generateResponse(req.body.message);
      return res.status(200).json({ reply });
    } catch (err) {
      console.error(err.message);
      return res.status(200).json({
        reply:
          "⚠️ I couldn’t generate a response. Try rephrasing your question."
      });
    }
  }
};

export default chatController;
