export interface IVehicle {
  id: number|null;
  name: string;
  description: string;
  plate: string;
  isFavorite: boolean|null;
  year: number|null;
  color: string;
  price: number|null;
  createdAt: Date|null;
}
