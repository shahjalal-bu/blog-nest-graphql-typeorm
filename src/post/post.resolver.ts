import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { Post } from './schema/post.schema';
import { PostService } from './post.service';
import { AddPostArgs } from './args/addPostArg';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role.guard';
import { userPayload } from 'src/type/type';
import { roles } from 'src/utils/constant';

@Resolver((of) => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query((returns) => [Post], { name: 'posts' })
  @UseGuards(JwtGuard, new RoleGuard(roles.ADMIN))
  async getPosts(@Context('user') user: any) {
    return this.postService.getPosts();
  }
  @UseGuards(JwtGuard)
  @Mutation((returns) => String)
  async addPost(
    @Context('user') user: userPayload,
    @Args('addUserArgs') addPostArgs: AddPostArgs,
  ) {
    return this.postService.addPost(user, addPostArgs);
  }
}
