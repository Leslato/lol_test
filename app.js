const express = require('express');
const app = express();

// Pour parser le JSON dans les requêtes POST
app.use(express.json());

app.all('/validate', (req, res) => {
    // Peu importe GET ou POST, on renvoie la même réponse
    res.status(200).json({ valid: true });
});

const PORT = 7897;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});
