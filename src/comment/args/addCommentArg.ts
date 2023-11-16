import { ID, Int } from '@nestjs/graphql';
import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class AddCommentArgs {
  @Field((type) => Int)
  postId: number;
  @Field()
  text: string;
}
