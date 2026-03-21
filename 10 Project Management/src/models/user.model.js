import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  avatar: {
    type: {
      url: String,
      localPath: String,
    },
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  email: {
    type: String,
    required: True,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
    },
    password: {
    type: String,
    required: [true, "Password is required"],   
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  refreshTokens:
    {
      type: String,
    },
    forgotPasswordToken: {
        type: String,
    },
    forgotPasswordTokenExpiry: {
        type: Date,
    },
    emailVerificationToken: {
        type: String,
    },
    emailVerificationTokenExpiry: {
        type: Date,
    },
}, {
  timestamps: true,

});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
   this.password = await bycryt.hash(this.password, 10)
        next();

    });

userSchema.methods.isPasswordCorrect = async function (candidatePassword) {
    return await bycryt.compare(candidatePassword, this.password);
};

export const User = mongoose.model("User", userSchema);
