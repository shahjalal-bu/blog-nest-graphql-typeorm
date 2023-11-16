import { Module } from '@nestjs/common';
import { CommentResolver } from './comment.resolver';
import { CommentService } from './comment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from './entity/comment.entity';
import { UserEntity } from 'src/user/entity/user.entity';
import { PostEntity } from 'src/post/entity/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity, UserEntity, PostEntity])],
  providers: [CommentResolver, CommentService],
})
export class CommentModule {}
