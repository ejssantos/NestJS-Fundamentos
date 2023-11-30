import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { UserService } from 'src/user/user.service';
import { MailerService } from '@nestjs-modules/mailer/dist';
export declare class AuthService {
    private readonly jwtService;
    private readonly prismaService;
    private readonly userService;
    private readonly mailer;
    constructor(jwtService: JwtService, prismaService: PrismaService, userService: UserService, mailer: MailerService);
    private audience;
    private issuer;
    createToken(user: User): {
        accessToken: string;
    };
    checkToken(token: string): any;
    login(email: string, password: string): Promise<{
        accessToken: string;
    }>;
    forget(email: string): Promise<boolean>;
    reset(password: string, token: string): Promise<{
        accessToken: string;
    }>;
    register(data: AuthRegisterDTO): Promise<{
        accessToken: string;
    }>;
    isValidToken(token: string): boolean;
}
