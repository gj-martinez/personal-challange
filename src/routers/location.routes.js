import { Router } from "express";
import {location } from "../controllers/location.controller.js"
const router =  Router();

/**
 * @swagger
 * /v1/location:
 *  get:
 *    description: Informacion sobre lugar de recidencia
 *    responses:
 *      '200':
 *        content: 
 *          application/json
 */
router.get('/v1/location',location)




export default router