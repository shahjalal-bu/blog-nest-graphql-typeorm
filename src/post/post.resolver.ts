import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Post } from './schema/post.schema';
import { PostService } from './post.service';
import { AddPostArgs } from './args/addPostArg';

@Resolver((of) => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query((returns) => [Post], { name: 'posts' })
  async getPosts() {
    return this.postService.getPosts();
  }
  @Mutation((returns) => String)
  async addPost(@Args('addUserArgs') addPostArgs: AddPostArgs) {
    return this.postService.addPost(addPostArgs);
  }
}
