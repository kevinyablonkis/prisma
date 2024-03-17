import express from "express";
import controller from "../controllers/nova.controller.js";

const router = express.Router();

router.get("/model-cars/nova", controller.index);

export default router;
