import { CommentEntity } from 'src/comment/entity/comment.entity';
import { UserEntity } from 'src/user/entity/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinTable,
} from 'typeorm';
@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  body: string;
  @ManyToOne((type) => UserEntity, (user) => user.posts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  author: UserEntity;
  @OneToMany(() => CommentEntity, (comment) => comment.post, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  comments: CommentEntity[];
}
