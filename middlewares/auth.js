import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(404).json({
      success: false,
      message: "Login first please",
    });
  }
  const decoded = jwt.verify(token, "asdlkj");
  req.user = await User.findById(decoded._id);
  next();
};
