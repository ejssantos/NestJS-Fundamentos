import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { env } from 'process';
//import { LogInterceptor } from './interceptors/log.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  //A instrução abaixo permite interceptar todos os meus controllers.
  //app.useGlobalInterceptors(new LogInterceptor());

  await app.listen(env.APP_PORT);
}
bootstrap();
