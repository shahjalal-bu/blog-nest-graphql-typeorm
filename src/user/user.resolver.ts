import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User } from './schema/user.schema';
import { UserService } from './user.service';
import { AddUserArgs } from './args/addUserArgs';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => [User])
  async getUsers() {
    return this.userService.getUsers();
  }
  @Mutation((returns) => String)
  async addUser(@Args('addUserArgs') addUserArgs: AddUserArgs) {
    return this.userService.addUser(addUserArgs);
  }
}
