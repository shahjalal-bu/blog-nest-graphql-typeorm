import { Field, InputType } from '@nestjs/graphql';
import { UserRole } from '../entity/user.entity';
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
  @Field({ defaultValue: UserRole.USER })
  role: UserRole;
}
