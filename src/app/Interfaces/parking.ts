export interface Parking{
  id: number,
  patente: string,
  horaIngreso: string,
  horaEgreso: string,
  costo: number,
  idUsuarioIngreso: string,
  idUsuarioEgreso: string,
  idCochera: number,
  eliminado: number | null
}