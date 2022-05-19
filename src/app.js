import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

import locationRoutes from './routers/location.routes.js';
import currentRoutes from './routers/current.routes.js';
import forecastRoutes from './routers/forecast.routes.js';
import config from './config.js';
import swaggerJsDoc from"swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();

app.use(express.json());



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Challange Personal-API",
      description: "Challange Personal-API Information",
      contact: {
        name: "Gonzalo Martinezr"
      },
      servers: {
        url: [`http://localhost:${config.PORT}`]
      }
    }
  },
  // ['.routes/*.js']
  apis: [`${path.join(__dirname, "./routers/*.js")}`]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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