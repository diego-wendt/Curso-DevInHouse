import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import {
  Solicitation,
  SolicitationCreate,
} from "../types/solicitation.types.js";
import { ParamId } from "../types/utils.types.js";
import {
  readSolicitation,
  writeSolicitation,
} from "../utils/solicitationFile.js";

export function findMany(request: Request<{}, {}, {}, {}>, response: Response) {
  const solicitations = readSolicitation();
  response.json(solicitations);
}

export function findOne(
  request: Request<ParamId, {}, {}, {}>,
  response: Response
) {
  const { id } = request.params;

  const solicitations = readSolicitation();

  const solicitation = solicitations.find(
    (solicitation) => solicitation.id === id
  );

  return response.json(solicitation);
}

export function create(
  request: Request<{}, {}, SolicitationCreate, {}>,
  response: Response
) {
  const {
    name_client,
    document_client,
    contact_client,
    address_client,
    payment_method,
    observations,
    pizzas,
  } = request.body;

  const soliciation: Solicitation = {
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

  const solicitations = readSolicitation();
  const data = [...solicitations, soliciation];
  writeSolicitation(data);

  response.status(201).json(soliciation);
}

export function finalizado(
  request: Request<ParamId, {}, {}, {}>,
  response: Response
) {
  const { id } = request.params;
  const solicitations = readSolicitation();
  const solicitation = solicitations.find(
    (solicitation) => solicitation.id === id
  );

  if (!solicitation) {
    response.status(404);
    return;
  }

  if (solicitation) {
    solicitation.order = "FINALIZADO";
  }

  const newList = solicitations.filter(
    (solicitation) => solicitation.id !== id
  );

  const data = [...newList, solicitation];
  if (data) {
    writeSolicitation(data);
  }
  response.status(201).json(solicitation);
}

export function emRota(
  request: Request<ParamId, {}, {}, {}>,
  response: Response
) {
  const { id } = request.params;
  const solicitations: Solicitation[] = readSolicitation();
  const solicitation = solicitations.find(
    (solicitation) => solicitation.id === id
  );

  if (!solicitation) {
    response.status(404);
    return;
  }

  if (solicitation) {
    solicitation.order = "A CAMINHO";
  }

  const newList = solicitations.filter(
    (solicitation) => solicitation.id !== id
  );

  const data = [...newList, solicitation];
  writeSolicitation(data);
  response.status(201).json(solicitation);
}
