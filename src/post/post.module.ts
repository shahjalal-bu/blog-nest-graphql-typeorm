import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { PostEntity } from './entity/post.entity';
import { UserEntity } from 'src/user/entity/user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([PostEntity, UserEntity])],
  providers: [PostService, PostResolver],
})
export class PostModule {}
