import { loginAdmin } from "../controllerLogic/loginAdmin.js";
import { loginUser } from "../controllerLogic/loginUser.js";
import express from "express";
const router = express.Router();
router.post("/login", loginAdmin);
router.post("/userLogin", loginUser);
export default router;
