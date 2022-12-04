import fs from "fs";
import { Solicitation } from "../types/solicitation.types";

export function readSolicitation() {
  const DATA = fs.readFileSync("solicitations.json").toString();
  return JSON.parse(DATA) as Solicitation[];
}

export function writeSolicitation(data: Solicitation[]) {
  fs.writeFileSync("solicitations.json", JSON.stringify(data));
}
