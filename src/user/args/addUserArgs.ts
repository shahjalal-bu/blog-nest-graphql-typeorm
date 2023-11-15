import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class AddUserArgs {
  @Field()
  name: string;
  @Field()
  street: string;
  @Field()
  email: string;
  @Field()
  password: string;
  @Field()
  role: string;
}
