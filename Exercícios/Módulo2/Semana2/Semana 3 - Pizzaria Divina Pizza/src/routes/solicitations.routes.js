import { Router } from "express";
import {
  create,
  findMany,
  findOne,
} from "../controllers/solicitations.controller.js";
const soliciationRoutes = Router();

soliciationRoutes.get("/solicitations", findMany);
soliciationRoutes.get("/solicitations/:id", findOne);
soliciationRoutes.post("/solicitations", create);

export default soliciationRoutes;
