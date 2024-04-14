import { Module } from '@nestjs/common';

import { UsersModule } from 'src/modules/users/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import configuration from 'src/config/configuration';

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      inject: [configuration.KEY],
      useFactory: (config: ConfigType<typeof configuration>) => {
        return {
          global: true,
          secret: config.jwtSecret,
          signOptions: { expiresIn: '4h' },
        };
      },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
