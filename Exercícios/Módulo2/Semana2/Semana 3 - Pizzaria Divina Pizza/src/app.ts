// NODEMON -> gerenciar o seu projeto

import express from "express";
import cors from "cors";
import cron from "node-cron";

import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import pizzasRoutes from "./routes/pizzas.routes.js";
import soliciationRoutes from "./routes/solicitations.routes.js";
import { sendEmailSolicitationInProduction } from "./jobs/sendEmailSolicitationInProduction.js";

export const app = express();

app.use(express.json());
app.use(cors());
app.use(pizzasRoutes);
app.use(soliciationRoutes);

cron.schedule("*/1 * * * *", sendEmailSolicitationInProduction);
