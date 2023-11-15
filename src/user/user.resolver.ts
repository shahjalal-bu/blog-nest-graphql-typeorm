import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User } from './schema/user.schema';
import { UserService } from './user.service';
import { AddUserArgs } from './args/addUserArgs';
import { UsePipes, ValidationPipe } from '@nestjs/common';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => [User])
  async getUsers() {
    return this.userService.getUsers();
  }
  @Mutation((returns) => String)
  @UsePipes(new ValidationPipe())
  async addUser(@Args('addUserArgs') addUserArgs: AddUserArgs) {
    return this.userService.addUser(addUserArgs);
  }
}
