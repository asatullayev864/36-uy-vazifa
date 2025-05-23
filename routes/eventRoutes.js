import express from "express";
import { register } from "../controllers/eventController.js";

const router = express.Router();

router.post("/register", register); // register POST request

export default router;