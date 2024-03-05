export class Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  stock: number = 0;
  image?: string;
}
