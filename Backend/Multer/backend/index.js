const express = require('express');
const multer = require('multer');
const fs = require('node:fs');

const upload = multer({dest: 'uploads/'});

const app = express();

function saveArchives(file) {
    const newPath = `./uploads/${file.originalname}`;
    fs.renameSync(file.path, newPath);
    return newPath;
}

app.post('/images/single', upload.single('imagenPerfil'), (req, res) => {
    console.log(req.file);
    saveArchives(req.file);
    res.send('Imagen guardada!');
})

app.post('/images/multi', upload.array('photos', 5), (req, res) => {
    req.files.map(saveArchives);
    res.send('Imagenes cargadas!');
})

app.post('/documents/single', upload.single('cv'), (req, res) => {
    console.log(req.file);
    saveArchives(req.file);
    res.send('CV guardado!');
})

app.post('/documents/multi', upload.array('cvs', 5), (req, res) => {
    req.files.map(saveArchives);
    res.send('CVs cargados!');
})

app.listen(3000, () => {
    console.log('Servidor en línea en el puerto: 3000');
})