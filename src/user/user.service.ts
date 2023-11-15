import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { AddUserArgs } from './args/addUserArgs';
import { AddressEntity } from 'src/address/entity/address.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    @InjectRepository(AddressEntity)
    private readonly addressRepo: Repository<AddressEntity>,
  ) {}
  async getUsers(): Promise<UserEntity[]> {
    return this.userRepo.find();
  }
  async addUser(addUserArgs: AddUserArgs): Promise<string> {
    const name = addUserArgs.name;
    const street = addUserArgs.street;
    const address = this.addressRepo.create({ street });
    const user = this.userRepo.create({ name, address });
    this.userRepo.save(user);
    return 'User added';
  }
}
