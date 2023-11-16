import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Comment } from 'src/comment/schema/comment.schema';
import { User } from 'src/user/schema/user.schema';

@ObjectType('post')
export class Post {
  @Field((type) => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  body: string;

  @Field((type) => User)
  author: User;
  @Field((type) => [Comment], { nullable: true })
  comments?: Comment;
}
