import {
  getWeek1Data,
  addWeek1Data,
  getWeek2Data,
  addWeek2Data,
  getWeek3Data,
  addWeek3Data,
  getWeek4Data,
  addWeek4Data,
  getWeek5Data,
  addWeek5Data,
  getWeek6Data,
  addWeek6Data,
  getWeek7Data,
  addWeek7Data,
  getWeek8Data,
  addWeek8Data,
  getWeek9Data,
  addWeek9Data,
  getWeek10Data,
  addWeek10Data,
  getWeek11Data,
  addWeek11Data,
  getCapstoneData,
  addCapstoneData,
  getAssessmentData,
  addAssessmentData,
  deleteCapstoneData,
  deleteAssessmentData,
  deleteWeekData
} from "../controllerLogic/weekDataController.js";
import express from "express";
import { fetchLeadboard } from "../controllerLogic/leadboardData.js";
const router = express.Router();
// week 1 routes
router.get("/week1Data", getWeek1Data);
router.post("/week1", addWeek1Data);
// week 2 routes
router.get("/week2Data", getWeek2Data);
router.post("/week2", addWeek2Data);
// week 3 routes
router.get("/week3Data", getWeek3Data);
router.post("/week3", addWeek3Data);
// week 4 routes
router.get("/week4Data", getWeek4Data);
router.post("/week4", addWeek4Data);
// week 5 routes
router.get("/week5Data", getWeek5Data);
router.post("/week5", addWeek5Data);
//week 6 routes
router.get("/week6Data", getWeek6Data);
router.post("/week6", addWeek6Data);
// week 7 routes
router.get("/week7Data", getWeek7Data);
router.post("/week7", addWeek7Data);
// week 8 routes
router.get("/week8Data", getWeek8Data);
router.post("/week8", addWeek8Data);
// week 9 routes
router.get("/week9Data", getWeek9Data);
router.post("/week9", addWeek9Data);
// week 10 routes
router.get("/week10Data", getWeek10Data);
router.post("/week10", addWeek10Data);
// week 11 routes
router.get("/week11Data", getWeek11Data);
router.post("/week11", addWeek11Data);
// capstone route
router.get("/capstoneData", getCapstoneData);
router.post("/capstone", addCapstoneData);
router.delete("/deleteCapstoneData/:id", deleteCapstoneData);
// assessment routes
router.get("/assessmentData", getAssessmentData);
router.post("/assessment", addAssessmentData);
router.delete("/deleteAssessmentData/:id", deleteAssessmentData);

//route to Delete a specific week data 
router.delete("/deleteWeek",deleteWeekData);

router.get("/leadboardData", fetchLeadboard);
export default router;
