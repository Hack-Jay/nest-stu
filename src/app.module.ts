import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CatModule } from './cat/cat.module';
import configuration from './config/configuration'

@Module({
  imports: [UsersModule, ConfigModule.forRoot({  // 配置文件中心加载env
    isGlobal: true,
    load: [configuration]
  }), CatModule], // 导入模块
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
