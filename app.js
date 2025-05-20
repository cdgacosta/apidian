const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Simulación de respuesta desde DIAN (reemplazar con lógica real en futuro)
app.get('/consulta', (req, res) => {
    const nit = req.query.nit;
    if (!nit) {
        return res.status(400).json({ error: 'NIT requerido' });
    }

    // Datos simulados
    res.json({
        nit: nit,
        nombre: "EMPRESA DEMO S.A.S.",
        direccion: "Calle Ficticia #123",
        ciudad: "Bogotá",
        dv: nit.length > 4 ? nit[nit.length - 1] : "0"
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});