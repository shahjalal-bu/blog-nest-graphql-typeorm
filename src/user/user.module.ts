import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { AddressEntity } from 'src/address/entity/address.entity';
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, AddressEntity])],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
