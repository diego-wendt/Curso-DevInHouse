import { v4 as uuidv4 } from "uuid";
import { readPizzas, writePizzas } from "../utils/pizzaFile.js";

export function findMany(request, response) {
  const nameQuery = request.query.name || "";
  const pizzas = readPizzas();
  const pizzasFiltered = pizzas.filter((pizza) =>
    pizza.name.toLowerCase().includes(nameQuery.toLowerCase())
  );
  response.json(pizzasFiltered);
}

export function create(request, response) {
  const { name, description, price, url, ingredients } = request.body;

  const pizzas = readPizzas();

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

export function deletePizza(request, response) {
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

export function updatePizza(request, response) {
  const { id } = request.params;
  const pizzas = readPizzas();
  const locatedPizza = pizzas.find((pizza) => pizza.id == id);

  if (!locatedPizza) {
    return response.status(404).json({ error: "Pizza não encontrada" });
  }

  const { name, description, price, url, ingredients } = request.body;

  locatedPizza.name = name;
  locatedPizza.description = description;
  locatedPizza.price = price;
  locatedPizza.url = url;
  locatedPizza.ingredients = ingredients;

  const filteredPizzas = pizzas.filter((pizza) => pizza.id !== id);
  const data = [...filteredPizzas, locatedPizza];
  writePizzas(data);

  response.status(201).json(locatedPizza);
}
