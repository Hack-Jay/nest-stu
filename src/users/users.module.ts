import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ShareModule } from 'src/share/shared.module'

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [ShareModule]
})
export class UsersModule {}
