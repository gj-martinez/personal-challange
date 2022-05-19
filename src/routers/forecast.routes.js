import { Router } from "express";
import {forecast } from "../controllers/forecast.controller.js"
const router =  Router();


router.get('/v1/forecast/:city?',forecast)




export default router