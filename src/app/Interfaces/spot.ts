import { Parking } from "./parking";

export interface Spot{
  id: number,
  descripcion: string,
  deshabilitada: number,
  eliminada: number,
  estacionamiento?: Parking;
}