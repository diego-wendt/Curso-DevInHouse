import fs from "fs";

export function readPizzas() {
  const pizzasInFile = fs.readFileSync("pizzas.json").toString();
  return JSON.parse(pizzasInFile);
}

export function writePizzas(data) {
  fs.writeFileSync("pizzas.json", JSON.stringify(data));
}
