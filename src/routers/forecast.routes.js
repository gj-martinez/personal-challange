import { Router } from "express";
import {forecast } from "../controllers/forecast.controller.js"
const router =  Router();

/**
 * @swagger
 * /v1/forecast/{city}:
 *  get:
 *    description: Obtener informacion del clima por 5 dias
 *    parameters:
 *      - in: path
 *        name: city
 *    responses:
 *      '200':
 *        content: 
 *          application/json
 */
router.get('/v1/forecast/:city?',forecast)




export default router