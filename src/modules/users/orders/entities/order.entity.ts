import { User } from '../../users/schemas/user.schema';
import { Product } from 'src/modules/products/products/schemas/product.schema';

export class Order {
  date: Date;
  user: User;
  products: Product[];
}
