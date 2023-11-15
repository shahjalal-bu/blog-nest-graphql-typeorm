import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import * as jwt from 'jsonwebtoken';
import { Observable } from 'rxjs';

@Injectable()
export class JwtGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext();
    const authorizationHeader = ctx.req.headers.authorization;
    if (authorizationHeader) {
      const token = authorizationHeader.split(' ')[1];
      try {
        const user = jwt.verify(token, 'changeLater');
        ctx.user = user;
        console.log(user);
        return true;
      } catch (error) {
        throw new HttpException(
          'Invalid Token: ' + error.message,
          HttpStatus.UNAUTHORIZED,
        );
      }
    } else {
      return false;
    }
  }
}
