import express from "express";
import controller from "../controllers/spare-parts.controller.js";

const router = express.Router();

router.get("/spare-parts", controller.index);

export default router;
