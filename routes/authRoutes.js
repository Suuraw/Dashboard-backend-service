import {loginAdmin} from "../controller/login.js"
import express from "express";
const router=express.Router();
router.post('/login',loginAdmin);
export default router;
