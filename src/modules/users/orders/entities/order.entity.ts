import { User } from '../../users/entities/user.entity';
import { Product } from 'src/modules/products/products/schemas/product.schema';

export class Order {
  date: Date;
  user: User;
  products: Product[];
}
