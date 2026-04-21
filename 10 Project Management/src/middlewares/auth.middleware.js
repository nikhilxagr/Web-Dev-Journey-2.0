import { User } from "../models/user.model.js";
import { ApiError } from "../utils/api-error.js";
import asyncHandler from "../utils/async-handler.js";
import jwt from "jsonwebtoken";
import { ProjectMember } from "../models/projectMember.model.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(401, "Unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken.id).select(
      "-password -refreshToken -emailVerificationToken -passwordResetToken",
    );

    if (!user) {
      throw new ApiError(401, "Invalid access token");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, "Invalid access token");
  }
});


export const validateProjectPermissions = asyncHandler(async (req, res, next) => {
  const {projectId} = req.params;

  if (!projectId) {
    throw new ApiError(400, "Project ID is missing");
  }

  const project = await ProjectMember.findOne({
    projectId: new mongoose.Types.ObjectId(projectId),
    userId: new mongoose.Types.ObjectId(req.user._id),
  })

  if (!project) {
    throw new ApiError(403, "You do not have permission to access this project");
  }

  const givenRole = project?.role;
  req.user.projectRole = givenRole;

  if(!roles.includes(givenRole)) {
    throw new ApiError(403, "You do not have permission to perform this action");
  }

  next();
});
