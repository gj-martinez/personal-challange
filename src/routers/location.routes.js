import { Router } from "express";
import {location } from "../controllers/location.controller.js"
const router =  Router();


router.get('/v1/location',location)




export default router