import express from "express";
import controller from "../controllers/model-cars.controller.js";
const router = express.Router();

router.get("/model-cars", controller.index);

export default router;
