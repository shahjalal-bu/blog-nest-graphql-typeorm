import { PostEntity } from 'src/post/entity/post.entity';
import { UserEntity } from 'src/user/entity/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;
  @Column()
  createdBy: string;
  @ManyToOne(() => UserEntity, (user) => user.comments)
  author: UserEntity;

  @ManyToOne(() => PostEntity, (post) => post.comments)
  post: PostEntity;
}
