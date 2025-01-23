import {getWeek1Data,addWeek1Data,getWeek2Data,addWeek2Data,getWeek3Data,addWeek3Data,getWeek4Data,addWeek4Data,getWeek5Data,addWeek5Data,getCapstoneData,addCapstoneData,getAssessmentData,addAssessmentData,deleteCapstoneData,deleteAssessmentData} from "../controllerLogic/weekDataController.js";
import express from "express";
import { fetchLeadboard } from "../controllerLogic/leadboardData.js";
const router=express.Router();
// week 1 routes
router.get("/week1Data",getWeek1Data);
router.post("/week1",addWeek1Data);
// week 2 routes
router.get("/week2Data",getWeek2Data);
router.post("/week2",addWeek2Data);
// week 3 routes
router.get("/week3Data",getWeek3Data);
router.post("/week3",addWeek3Data);
// week 4 routes
router.get("/week4Data",getWeek4Data);
router.post("/week4",addWeek4Data);
// week 5 routes
router.get("/week5Data",getWeek5Data);
router.post("/week5",addWeek5Data);
// capstone route
router.get("/capstoneData",getCapstoneData);
router.post("/capstone",addCapstoneData);
router.delete("/deleteCapstoneData/:id",deleteCapstoneData);
// assessment routes
router.get("/assessmentData",getAssessmentData);
router.post("/assessment",addAssessmentData);
router.delete("/deleteAssessmentData/:id",deleteAssessmentData);

router.get("/leadboardData",fetchLeadboard);
export default router;