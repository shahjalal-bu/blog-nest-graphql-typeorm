import { ObjectType, Field, ID } from '@nestjs/graphql';
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
}
