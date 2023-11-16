import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Post } from 'src/post/schema/post.schema';
import { User } from 'src/user/schema/user.schema';

@ObjectType('comment')
export class Comment {
  @Field((type) => ID)
  id: number;

  @Field()
  text: string;
  @Field()
  createdBy: string;

  @Field((type) => Post)
  post: Post;

  @Field((type) => User)
  author: User;
}
