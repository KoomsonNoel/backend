export default function validateInput(req, res, next) {
  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Message is required." });
  }

  if (message.length > 3000) {
    return res.status(400).json({ error: "Message is too long." });
  }

  next();
}
