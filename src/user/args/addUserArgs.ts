import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class AddUserArgs {
  @Field()
  name: string;
  @Field()
  street: string;
}
