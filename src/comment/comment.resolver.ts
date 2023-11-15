import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Comment } from './schema/comment.schema';
import { CommentService } from './comment.service';

@Resolver((of) => Comment)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}
}
