import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot([
      {
        ttl: 60000, //tempo de solicitação em milisegundos
        limit: 10, //quantidade de acesso por ttl. Exemplo: 10 acessos a cada 60 segundos (60 segundos = 60000 milisegundos).
        ignoreUserAgents: [/googlebot/gi], //ignore agents. Nesse casso, permitindo acesso ilimitado aos robôs do Google.
      },
    ]),
    forwardRef(() => UserModule),
    PrismaModule,
    forwardRef(() => AuthModule),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    //ThrottlerGuard em nível de toda a aplicação
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
