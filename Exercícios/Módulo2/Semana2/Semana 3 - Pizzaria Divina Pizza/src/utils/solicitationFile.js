import fs from "fs";

export function readSolicitation() {
  const DATA = fs.readFileSync("solicitations.json").toString();
  return JSON.parse(DATA);
}

export function writeSolicitation(data) {
  fs.writeFileSync("solicitations.json", JSON.stringify(data));
}
