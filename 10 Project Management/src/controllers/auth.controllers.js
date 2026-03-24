import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import asyncHandler from "../utils/async-handler.js";
import { emailVerificationMailgenContent, sendEmail } from "../utils/mail.js";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;

    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    throw new ApiError(500, "Failed to generate tokens");
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;

  if ([email, username, password].some((field) => !field?.trim())) {
    throw new ApiError(400, "Email, username, and password are required");
  }

  const existedUser = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  const newUser = await User.create({
    email,
    username,
    password,
    isEmailVerified: false,
  });

  const { unHashedToken, hashedToken, tokenExpiry } =
    newUser.generateTemporaryToken();

  newUser.emailVerificationToken = hashedToken;
  newUser.emailVerificationTokenExpiry = tokenExpiry;

  await newUser.save({ validateBeforeSave: false });

  await sendEmail({
    email: newUser.email,
    subject: "Email Verification",
    mailgenContent: emailVerificationMailgenContent(
      newUser.username,
      `${req.protocol}://${req.get("host")}/api/v1/auth/verify-email?token=${unHashedToken}`,
    ),
  });

  const createdUser = await User.findById(newUser._id).select(
    "-password -refreshToken -emailVerificationToken -emailVerificationTokenExpiry",
  );

  if (!createdUser) {
    throw new ApiError(500, "Failed to create user");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        { user: createdUser },
        "User registered successfully. Please check your email to verify your account.",
      ),
    );
});

export { generateAccessAndRefreshToken, registerUser };
