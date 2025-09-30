export default function handler(req, res) {
  // On accepte uniquement les GET (mais tu peux élargir si tu veux)
  if (req.method === "GET") {
    res.status(200).json({ valid: true });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

