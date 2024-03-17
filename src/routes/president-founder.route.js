import express from "express";
import controller from "../controllers/president-founder.controller.js";
const router = express.Router();

router.get("/president-founder", controller.index);

export default router;
