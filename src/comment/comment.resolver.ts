import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { Comment } from './schema/comment.schema';
import { CommentService } from './comment.service';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwt.guard';
import { userPayload } from 'src/type/type';
import { AddCommentArgs } from './args/addCommentArg';

@Resolver((of) => Comment)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}
  @UseGuards(JwtGuard)
  @Mutation((returns) => String)
  async addComment(
    @Context('user') user: userPayload,
    @Args('addCommentArgs') addCommentArgs: AddCommentArgs,
  ) {
    return this.commentService.addComment(user, addCommentArgs);
  }
}
