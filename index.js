const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();

const port = 3000;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/') // Directorio donde se guardarán los archivos
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname) // Nombre original del archivo
    }
});

const upload = multer({storage: storage});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('/public/index.html');
});

// Ruta para subir un archivo binario
app.post('/upload', upload.single('file'), (req, res) => {
    res.send('archivo subido');
});

// Ruta para descargar un archivo binario
app.get('/download/:filename', (req, res) => {
    const file = path.join(__dirname, 'download', req.params.filename);
    res.download(file);
});

app.listen(port, () => {
    console.log(`servidor en puerto: ${port}`);
});