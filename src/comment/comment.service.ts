import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentEntity } from './entity/comment.entity';
import { userPayload } from 'src/type/type';
import { AddCommentArgs } from './args/addCommentArg';
import { UserEntity } from 'src/user/entity/user.entity';
import { PostEntity } from 'src/post/entity/post.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepo: Repository<CommentEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    @InjectRepository(PostEntity)
    private readonly postRepo: Repository<PostEntity>,
  ) {}
  async addComment(
    signedUser: userPayload,
    addCommentArgs: AddCommentArgs,
  ): Promise<string> {
    const matchUserEntity: UserEntity = await this.userRepo.findOne({
      where: { id: signedUser.id },
    });
    const matchPostEntity: PostEntity = await this.postRepo.findOne({
      where: { id: addCommentArgs.postId },
    });
    if (matchUserEntity && matchPostEntity) {
      const comment = this.commentRepo.create({
        author: matchUserEntity,
        text: addCommentArgs.text,
        post: matchPostEntity,
        createdBy: signedUser.name,
      });
      await this.commentRepo.save(comment);
    }
    return 'Comment added';
  }
}
