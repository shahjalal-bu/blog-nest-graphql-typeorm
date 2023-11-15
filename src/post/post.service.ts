import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from './entity/post.entity';
import { AddPostArgs } from './args/addPostArg';
import { UserEntity } from 'src/user/entity/user.entity';
import { userPayload } from 'src/type/type';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepo: Repository<PostEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}
  async getPosts(): Promise<PostEntity[]> {
    return this.postRepo.find({ relations: ['author'] });
  }
  async addPost(
    signedUser: userPayload,
    addPostArgs: AddPostArgs,
  ): Promise<string> {
    const user: UserEntity = await this.userRepo.findOne({
      where: { id: signedUser.id },
    });
    if (user) {
      const post = this.postRepo.create({
        author: user,
        title: addPostArgs.title,
        body: addPostArgs.body,
      });
      await this.postRepo.save(post);
    }
    return 'Post added';
  }
}
