import fs from "fs";
import { Pizza } from "../types/pizzas.types";

export function readPizzas() {
  const DATA = fs.readFileSync("pizzas.json").toString();
  return JSON.parse(DATA) as Pizza[];
}

export function writePizzas(data: Pizza[]) {
  fs.writeFileSync("pizzas.json", JSON.stringify(data));
}
