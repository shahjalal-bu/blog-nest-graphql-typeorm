import { AddressEntity } from 'src/address/entity/address.entity';
import { CommentEntity } from 'src/comment/entity/comment.entity';
import { PostEntity } from 'src/post/entity/post.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  role: string;
  @OneToOne(() => AddressEntity, (address) => address.user, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  address: AddressEntity;

  @OneToMany(() => PostEntity, (post) => post.author, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  posts: PostEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.author, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  comments: CommentEntity[];
}
