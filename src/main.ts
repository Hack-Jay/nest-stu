import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ResponseFormatInterceptor } from './common/response-format/response-format.interceptor'
import { ErrorFormatFilter } from './common/error-format/error-format.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'verbose'],
  });
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ResponseFormatInterceptor())
  app.useGlobalFilters(new ErrorFormatFilter)
  SwaggerModule.setup('api/doc', app, document);

  await app.listen(3000);
}
bootstrap();
