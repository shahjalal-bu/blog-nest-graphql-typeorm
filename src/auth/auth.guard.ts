import { UserService } from './../user/user.service';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserEntity } from 'src/user/entity/user.entity';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext();
    const { email, password } = ctx.req.body.variables;
    const user: UserEntity = await this.userService.findUserByEmail(email);
    console.log('user console', ctx.req.body);
    if (user && user.password === password) {
      ctx.user = user;
      return true;
    } else {
      throw new HttpException('UnAuthenticated', HttpStatus.UNAUTHORIZED);
    }
  }
}
