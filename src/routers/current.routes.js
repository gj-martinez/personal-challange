import { Router } from "express";
import {current } from "../controllers/current.controller.js"
const router =  Router();

/**
 * @swagger
 * /v1/current/{city}:
 *  get:
 *    description: Obtener informacion del clima del momento
 *    parameters:
 *      - in: path
 *        name: city
 *    responses:
 *      '200':
 *        content: 
 *          application/json
 */
router.get('/v1/current/:city?',current)




export default router