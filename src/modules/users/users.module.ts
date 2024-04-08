import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CustomersModule, UsersModule, OrdersModule],
})
export class UsersGroupModule {}
