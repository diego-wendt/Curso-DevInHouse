import { Router } from "express";
import {
  create,
  findMany,
  findOne,
  finalizado,
  emRota,
} from "../controllers/solicitations.controller.js";
const soliciationRoutes = Router();

soliciationRoutes.get("/solicitations", findMany);
soliciationRoutes.get("/solicitations/:id", findOne);
soliciationRoutes.post("/solicitations", create);
soliciationRoutes.patch("/solicitations/finalizado/:id", finalizado);
soliciationRoutes.patch("/solicitations/emrota/:id", emRota);

export default soliciationRoutes;
