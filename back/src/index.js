require('dotenv').config();
const express = require('express');
const req = require('express/lib/request');
const bodyParser = require('body-parser');
const cors = require('cors');

const v1alumnoRouter = require("./v1/routers/alumnoRoutes");
const v1profesorRouter = require('./v1/routers/profesorRoutes');
const v1materiaRouter = require('./v1/routers/materiasRoutes');
const v1RickAndMorty = require("./v1/routers/rickandmortyRoutes");
const v1meal = require("./v1/routers/mealRoutes");
const v1chuck = require("./v1/routers/chuckNorrisRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));
app.use("/api/v1/alumno", v1alumnoRouter);
app.use("/api/v1/materia", v1materiaRouter);
app.use("/api/v1/profesor", v1profesorRouter);
app.use("/api/v1/rickandmorty", v1RickAndMorty);
app.use("/api/v1/meal", v1meal);
app.use("/api/v1/chucknorris", v1chuck);

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
});