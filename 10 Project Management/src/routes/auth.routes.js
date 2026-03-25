import { Router } from "express";
import { login, registerUser } from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
  userLoginValidation,
  userRegisterValidation,
} from "../validaters/index.js";

const router = Router();

router
  .route("/register")
  .post(userRegisterValidation(), validate, registerUser);
router.route("/login").post(userLoginValidation(), validate, login);

export default router;
