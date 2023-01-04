// Interface base para extender
export interface BaseModel {
  readonly id: string; // Solo lectura, no se puede modificar
  readonly createdAt: Date; // Solo lectura, no se puede modificar
  updatedAt: Date;
}