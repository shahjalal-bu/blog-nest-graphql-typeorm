import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Address } from 'src/address/schema/address.schema';
import { Post } from 'src/post/schema/post.schema';

@ObjectType('User')
export class User {
  @Field((type) => ID)
  id: number;
  @Field()
  name: string;
  @Field((type) => Address, { nullable: true })
  address?: Address;
  @Field((type) => [Post], { nullable: true })
  posts?: Post[];
}
