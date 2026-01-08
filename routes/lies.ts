import express from "express";
import lieController from "../controllers/lies";

const router = express.Router();
router.post("", lieController.getLies);

export default router;
