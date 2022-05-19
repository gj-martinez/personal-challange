import express from 'express';
import fetch from 'node-fetch';
import locationRoutes from './routers/location.routes.js';
import currentRoutes from './routers/current.routes.js';
import forecastRoutes from './routers/forecast.routes.js'

const app = express();

app.use(express.json());


app.get("/v1", (req, res) => {
    res.send({
        message: "Bienvenidos a Challange Personal-API",
        author: "Gonzalo Martinez",
  });
});

app.use(locationRoutes);
app.use(currentRoutes);
app.use(forecastRoutes);

export default app;