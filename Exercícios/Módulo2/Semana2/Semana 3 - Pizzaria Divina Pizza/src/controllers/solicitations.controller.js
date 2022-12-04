import { v4 as uuidv4 } from "uuid";
import {
  readSolicitation,
  writeSolicitation,
} from "../utils/solicitationFile.js";

export function findMany(request, response) {
  const solicitations = readSolicitation();
  response.json(solicitations);
}

export function findOne(request, response) {
  const { id } = request.params;

  const solicitations = readSolicitation();

  const solicitation = solicitations.find(
    (solicitation) => solicitation.id === id
  );

  return response.json(solicitation);
}

export function create(request, response) {
  const {
    name_client,
    document_client,
    contact_client,
    address_client,
    payment_method,
    observations,
    pizzas,
  } = request.body;

  const soliciation = {
    id: uuidv4(),
    name_client,
    document_client,
    contact_client,
    address_client,
    payment_method,
    observations,
    pizzas,
    order: "EM PRODUÇÃO",
  };

  const data = [soliciation];
  writeSolicitation(data);

  response.status(201).json(soliciation);
}

export function finalizado(request, response) {
  const { id } = request.params;
  const solicitations = readSolicitation();
  const solicitation = solicitations.find(
    (solicitation) => solicitation.id === id
  );
  solicitation.order = "FINALIZADO";

  const newList = solicitations.filter(
    (solicitation) => solicitation.id !== id
  );

  const data = [...newList, solicitation];
  writeSolicitation(data);
  response.status(201).json(solicitation);
}

export function emRota(request, response) {
  const { id } = request.params;
  const solicitations = readSolicitation();
  const solicitation = solicitations.find(
    (solicitation) => solicitation.id === id
  );
  solicitation.order = "A CAMINHO";

  const newList = solicitations.filter(
    (solicitation) => solicitation.id !== id
  );

  const data = [...newList, solicitation];
  writeSolicitation(data);
  response.status(201).json(solicitation);
}
