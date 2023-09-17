import { Module } from '@nestjs/common';
import { AppLoggerModule } from './logger/logger.module';

@Module({
  exports: [AppLoggerModule],
  imports: [AppLoggerModule],
})
export class ShareModule {}
