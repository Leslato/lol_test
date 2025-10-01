export default function handler(req, res) {
  // On accepte uniquement les GET (mais tu peux élargir si tu veux)
  if (req.method === "GET" || req.method == "POST") {
    const valid = true;
    res.status(200).json({ valid });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}







