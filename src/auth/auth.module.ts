import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [AuthGuard],
})
export class AuthModule {}
