import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Address')
export class Address {
  @Field((type) => ID)
  id: number;

  @Field()
  street: string;
}
