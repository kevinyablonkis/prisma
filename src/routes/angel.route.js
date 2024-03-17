import express from "express";
import controller from "../controllers/angel.controller.js";

const router = express.Router();

router.get("/model-cars/angel", controller.index);

export default router;
