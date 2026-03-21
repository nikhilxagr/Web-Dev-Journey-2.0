import {Router} from "express";
import { healthCheck } from "../controllers/healthcheck.controller.js";

const router = Router();

// Health Check Route
router.route("/").get(healthCheck);
router.route("/health").get(healthCheck);

export default router;
