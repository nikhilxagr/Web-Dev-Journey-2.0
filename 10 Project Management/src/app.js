import express from "express";
import cors from "cors";
const app = express();

// Basic Middleware for configuration of the app

app.use((req, res, next) => {
  const [path, query] = req.url.split("?");
  const normalizedPath = path.replace(/\/{2,}/g, "/");

  req.url = query ? `${normalizedPath}?${query}` : normalizedPath;
  next();
});

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// Cors confqiguration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Importing Routes
import healthCheckRoutes from "./routes/healthcheck.routes.js";
import authRouter from "./routes/auth.routes.js";

app.use("/api/v1/healthcheck", healthCheckRoutes);

app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Project Management API");
});

export default app;
