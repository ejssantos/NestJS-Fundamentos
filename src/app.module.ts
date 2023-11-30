import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

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
    MailerModule.forRoot({
      transport: {
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'wilfrid.schiller@ethereal.email',
          pass: 'W5KcxtpJ4DWPwDx7yy',
        },
      },
      defaults: {
        from: '"NestJS - Mailer" <wilfrid.schiller@ethereal.email>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new PugAdapter(),
        options: {
          strict: true,
        },
      },
    }),
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
