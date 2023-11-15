import { UserService } from './../user/user.service';
import * as bcrypt from 'bcrypt';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserEntity } from 'src/user/entity/user.entity';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext();
    const { email, password } = ctx.req.body.variables;
    const user: UserEntity = await this.userService.findUserByEmail(email);

    if (user) {
      const isMatch: boolean = await comparePasswords(password, user.password);
      console.log(isMatch);
      if (isMatch) {
        ctx.user = user;
        return true;
      } else {
        throw new HttpException(
          'Password not matched',
          HttpStatus.UNAUTHORIZED,
        );
      }
    } else {
      throw new HttpException('UnAuthenticated', HttpStatus.UNAUTHORIZED);
    }
  }
}
