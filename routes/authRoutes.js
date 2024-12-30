import { loginAdmin } from "../Controller/Login.js";
import express from "express";
const router = express.Router();
router.post("/login", loginAdmin);
export default router;
