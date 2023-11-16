import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PrismaModule } from 'src/prisma/prisma.module';

//  Para resolver circular dependency: forwardRef
//    exports: [AuthService],

@Module({
  imports: [
    JwtModule.register({
      secret: ":R`)'Ui+N7U,Y#S$|C+*Ts2%3Db&{V{w",
    }),
    forwardRef(() => UserModule),
    PrismaModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
