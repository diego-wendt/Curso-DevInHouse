import { Pizza } from "./pizzas.types";

export interface Solicitation {
  id: string;
  name_client: string;
  document_client: string;
  contact_client: string;
  address_client: string;
  payment_method: string;
  observations: string;
  pizzas: Pizza[];
  order: string;
}

export interface SolicitationCreate {
  name_client: string;
  document_client: string;
  contact_client: string;
  address_client: string;
  payment_method: string;
  observations: string;
  pizzas: Pizza[];
}
