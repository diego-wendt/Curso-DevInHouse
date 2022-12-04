import { Router } from "express";

const pizzasRoutes = Router();

import { findMany, create } from "./../controllers/pizzas.controller.js";


pizzasRoutes.get("/pizzas", findMany);
pizzasRoutes.post("/pizzas", create);

export default pizzasRoutes;
