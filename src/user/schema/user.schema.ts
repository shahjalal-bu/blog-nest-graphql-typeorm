import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Address } from 'src/address/schema/address.schema';
import { Comment } from 'src/comment/schema/comment.schema';
import { Post } from 'src/post/schema/post.schema';

@ObjectType('User')
export class User {
  @Field((type) => ID)
  id: number;
  @Field()
  name: string;
  @Field()
  role: string;
  @Field()
  email: string;
  @Field((type) => Address, { nullable: true })
  address?: Address;
  @Field((type) => [Post], { nullable: true })
  posts?: Post[];
  @Field((type) => [Comment], { nullable: true })
  comments?: Comment[];
}
