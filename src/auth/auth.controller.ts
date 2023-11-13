import {
  Controller,
  Post,
  //Headers,
  Body,
  UseGuards,
  //Req,
} from '@nestjs/common';
import { AuthForgetDTO } from './dto/auth-forget.dto';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { AuthLoginDTO } from './dto/auth-login.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { AuthResetDTO } from './dto/auth-reset.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { User } from 'src/decorators/user.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() { email, password }: AuthLoginDTO) {
    return await this.authService.login(email, password);
  }

  @Post('register')
  async register(@Body() body: AuthRegisterDTO) {
    return await this.authService.register(body);
  }

  @Post('forget')
  async forget(@Body() { email }: AuthForgetDTO) {
    return await this.authService.forget(email);
  }

  @Post('reset')
  async reset(@Body() { password, token }: AuthResetDTO) {
    return await this.authService.reset(password, token);
  }

  /*
  @Post('check')
  async check(@Body() body) {
    return await this.authService.checkToken(body.token);
  }

  Ou...

  @Post('check')
  async check(@Headers('authorization') token) {
    //return headers;
    return await this.authService.checkToken((token ?? '').split(' ')[1]);
  }
  
  Ou...

  @UseGuards(AuthGuard)
  @Post('check')
  async check() {
    return { me: 'Ok' };
    //return await this.authService.checkToken((token ?? '').split(' ')[1]);
  }

  Ou...

  @UseGuards(AuthGuard)
  @Post('check')
  async check(@Req() req) {
    return { check: 'Ok', data: req.tokenPayload, user: req.user };
  }
  */

  @UseGuards(AuthGuard)
  @Post('check')
  async check(@User('email') user) {
    return { user };
  }
}
