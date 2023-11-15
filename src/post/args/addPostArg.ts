import { ID } from '@nestjs/graphql';
import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class AddPostArgs {
  @Field()
  title: string;
  @Field()
  body: string;
  // @Field((type) => ID)
  // authorId: number;
}
