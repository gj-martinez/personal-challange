import { Router } from "express";
import {current } from "../controllers/current.controller.js"
const router =  Router();


router.get('/v1/current/:city?',current)




export default router