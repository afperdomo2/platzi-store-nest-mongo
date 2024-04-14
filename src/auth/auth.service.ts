import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersService } from 'src/modules/users/users/users.service';
import { SingInDto } from './dto/sing-in.dto';
import { PayloadToken } from './interfaces/token.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async singIn(singInDto: SingInDto) {
    const { email, password } = singInDto;
    const user = await this.usersService.findByEmail(email);

    const isMatch = user?.password
      ? await bcrypt.compare(password, user.password)
      : false;
    console.log('isMatch:', isMatch);
    if (!user || !isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload: PayloadToken = { sub: user._id, role: user.role };
    const dataUser = user.toJSON();
    delete dataUser.password;
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: dataUser,
    };
  }
}
