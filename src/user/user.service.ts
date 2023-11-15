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
  async findUserByEmail(email: string) {
    const user: UserEntity = await this.userRepo.findOne({
      where: { email: email },
    });
    return user;
  }
  async addUser(addUserArgs: AddUserArgs): Promise<string> {
    const name = addUserArgs.name;
    const street = addUserArgs.street;
    const password = addUserArgs.password;
    const role = addUserArgs.role;
    const email = addUserArgs.email;
    const address = this.addressRepo.create({ street });
    const user = this.userRepo.create({ name, address, password, role, email });
    this.userRepo.save(user);
    return 'User added';
  }
}
