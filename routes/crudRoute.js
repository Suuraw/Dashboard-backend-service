import {getCourseData,addCourseData} from "../controller/weekDataController.js";
import express from "express";
const router=express.Router();
router.get("/weekData",getCourseData);
router.post("/addWeekData",addCourseData);
export default router;