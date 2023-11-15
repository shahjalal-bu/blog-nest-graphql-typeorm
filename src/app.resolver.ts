import { UseGuards } from '@nestjs/common';
import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from './auth/auth.guard';
import { UserEntity } from './user/entity/user.entity';
import * as jwt from 'jsonwebtoken';

@Resolver((of) => String)
export class AppResolver {
  @Query((returns) => String)
  index(): string {
    return 'First query for graphql';
  }

  @Query((returns) => String)
  @UseGuards(AuthGuard)
  login(
    @Args({ name: 'email', type: () => String }) email: string,
    @Args({ name: 'password', type: () => String }) password: string,
    @Context('user') user: UserEntity,
  ): string {
    console.log('email', email);
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    return jwt.sign(payload, 'changeLater', { expiresIn: '60s' });
  }
}
