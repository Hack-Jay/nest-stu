import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import configuration from './config/configuration'

@Module({
  imports: [UsersModule, ConfigModule.forRoot({  // 配置文件中心加载env
    isGlobal: true,
    load: [configuration]
  })], // 导入模块
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
