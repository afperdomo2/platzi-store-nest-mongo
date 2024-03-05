import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [CustomersModule, UsersModule, OrdersModule],
})
export class UsersGroupModule {}
