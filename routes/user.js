import express from "express";
import {
  login,
  logout,
  register,
  getAllUsers,
  getMyProfile,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/all", getAllUsers);

//give data in body only when doing POST
//if doing GET then pass it inside params
router.post("/new", register);
router.post("/login", login);
router.get("/logout", logout);

//Dynamic route must be at bottom
//give data in body only when doing POST
//if doing GET then pass it inside params
// Dynamic URLs "/userid/:id"->"/userid/sdjlksad"
router.get("/me", isAuthenticated, getMyProfile);

//OR
// router
//     .route("/userid/:id")
//     .get(getUserDetails)
//     .post
//     .put

export default router;
