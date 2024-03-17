import express from "express";
import controller from "../controllers/stellar.controller.js";

const router = express.Router();

router.get("/model-cars/stellar", controller.index);

export default router;
