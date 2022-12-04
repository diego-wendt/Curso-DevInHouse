import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Pizza, PizzaDados, QueryPizzas } from "../types/pizzas.types.js";
import { ParamId } from "../types/utils.types.js";
import { readPizzas, writePizzas } from "../utils/pizzaFile.js";

export function findMany(
  request: Request<{}, {}, {}, QueryPizzas>,
  response: Response
) {
  const nameQuery = request.query.name?.toLowerCase() || "";
  const pizzas = readPizzas();
  const pizzasFiltered = pizzas.filter((pizza) =>
    pizza.name.toLowerCase().includes(nameQuery)
  );
  response.json(pizzasFiltered);
}

export function create(
  request: Request<{}, {}, PizzaDados>,
  response: Response
) {
  const { name, description, price, url, ingredients } = request.body;

  const pizzas: Pizza[] = readPizzas();

  const pizzaExists = pizzas.find((pizza) => pizza.name === name);

  if (pizzaExists) {
    return response
      .status(401)
      .json({ error: "Pizza já encontra-se cadastrada" });
  }

  const pizza = {
    id: uuidv4(),
    name,
    url,
    description,
    price,
    ingredients,
  };

  const data = [...pizzas, pizza];

  writePizzas(data);

  response.status(201).json(pizza);
}

export function deletePizza(request: Request<ParamId>, response: Response) {
  const { id } = request.params;
  const pizzas = readPizzas();
  const locatedPizza = pizzas.find((pizza) => pizza.id == id);

  if (!locatedPizza) {
    return response.status(404).json({ error: "Pizza não encontrada" });
  }

  const data = pizzas.filter((pizza) => pizza.id !== id);
  writePizzas(data);
  response.status(204).json();
}

export function updatePizza(request: Request<ParamId>, response: Response) {
  const { id } = request.params;
  const pizzas = readPizzas();
  const locatedPizza = pizzas.find((pizza) => pizza.id == id);

  if (!locatedPizza) {
    return response.status(404).json({ error: "Pizza não encontrada" });
  }

  const { name, description, price, url, ingredients } = request.body;

  const updatedPizza: Pizza = {
    id,
    name,
    description,
    price,
    url,
    ingredients,
  };

  const filteredPizzas = pizzas.filter((pizza) => pizza.id !== id);
  const data = [...filteredPizzas, updatedPizza];
  writePizzas(data);

  response.status(201).json(updatedPizza);
}
