import fs from "fs";

export function readPizzas() {
  const DATA = fs.readFileSync("pizzas.json").toString();
  return JSON.parse(DATA);
}

export function writePizzas(data) {
  fs.writeFileSync("pizzas.json", JSON.stringify(data));
}
