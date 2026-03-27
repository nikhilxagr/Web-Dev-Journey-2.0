import { User } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";


export const verifyJWT = asyncHandler(async (req, res, next) => {
    const token = req.cookies?.accessToken || req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
        throw new ApiError("Unauthorized request", 401);
    }

    try {
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decodedToken.id).select("-password -refreshToken -emailVerificationToken -passwordResetToken");

        if (!user) {
            throw new ApiError("Invalid access token", 401);
        }
        req.user = user;
        next();
        
    } catch (error) {
        throw new ApiError("Invalid access token", 401);
    }
});