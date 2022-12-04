import { Router } from "express";

const pizzasRoutes = Router();

import {
  findMany,
  create,
  deletePizza,
  updatePizza,
} from "./../controllers/pizzas.controller.js";

pizzasRoutes.get("/pizzas", findMany);
pizzasRoutes.post("/pizzas", create);
pizzasRoutes.delete("/pizzas/:id", deletePizza);
pizzasRoutes.put("/pizzas/:id", updatePizza);

export default pizzasRoutes;
