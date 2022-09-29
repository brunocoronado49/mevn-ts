import express from "express";
import morgan from "morgan";
import cors from "cors";
import { router } from './routes/index'

export const app = express();

/// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

/// Routes
app.use("/api", router)
