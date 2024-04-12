import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/modules/users/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      const dataUser = user.toJSON();
      delete dataUser.password;
      return isMatch ? dataUser : null;
    }
    return null;
  }
}
