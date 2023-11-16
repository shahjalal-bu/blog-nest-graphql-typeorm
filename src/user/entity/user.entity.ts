import { AddressEntity } from 'src/address/entity/address.entity';
import { CommentEntity } from 'src/comment/entity/comment.entity';
import { PostEntity } from 'src/post/entity/post.entity';
import { roles } from 'src/utils/constant';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column({ default: UserRole.USER })
  role: UserRole;
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
  comments?: CommentEntity[];
}

// user.entity.ts
// import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
// import { AddressEntity } from 'src/address/entity/address.entity';
// import { CommentEntity } from 'src/comment/entity/comment.entity';
// import { PostEntity } from 'src/post/entity/post.entity';
// import { roles } from 'src/utils/constant';
// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   OneToOne,
//   JoinColumn,
//   OneToMany,
// } from 'typeorm';

// export enum UserRole {
//   ADMIN = 'ADMIN',
//   USER = 'USER',
// }

// @Entity()
// export class UserEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   @IsNotEmpty({ message: 'Name should not be empty' })
//   @IsString({ message: 'Name should be a string' })
//   name: string;

//   @Column({ unique: true })
//   @IsNotEmpty({ message: 'Email should not be empty' })
//   @IsEmail({}, { message: 'Email should be a valid email address' })
//   email: string;

//   @Column()
//   @IsNotEmpty({ message: 'Password should not be empty' })
//   @MinLength(6, {
//     message: 'Password should have a minimum length of 6 characters',
//   })
//   password: string;

//   @Column({ default: UserRole.USER })
//   role: UserRole;

//   @OneToOne(() => AddressEntity, (address) => address.user, {
//     cascade: true,
//     eager: true,
//     onDelete: 'CASCADE',
//   })
//   @JoinColumn()
//   address: AddressEntity;

//   @OneToMany(() => PostEntity, (post) => post.author, {
//     cascade: true,
//     eager: true,
//     onDelete: 'CASCADE',
//   })
//   @JoinColumn()
//   posts: PostEntity[];

//   @OneToMany(() => CommentEntity, (comment) => comment.author, {
//     cascade: true,
//     eager: true,
//     onDelete: 'CASCADE',
//   })
//   @JoinColumn()
//   comments: CommentEntity[];
// }
