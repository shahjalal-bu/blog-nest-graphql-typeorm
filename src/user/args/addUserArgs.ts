import { Field, InputType } from '@nestjs/graphql';
import { UserRole } from '../entity/user.entity';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
@InputType()
export class AddUserArgs {
  @Field()
  @IsNotEmpty({ message: 'Username should not be empty' })
  @IsString({ message: 'Username should be a string' })
  name: string;
  @Field()
  street: string;
  @Field()
  @IsEmail({}, { message: 'Enter correct email' })
  email: string;
  @Field()
  @IsNotEmpty({ message: 'Password should not be empty' })
  @IsString({ message: 'Password should be a string' })
  password: string;
  @Field({ defaultValue: UserRole.USER })
  role: UserRole;
}
