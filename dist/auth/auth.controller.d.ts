import { AuthForgetDTO } from './dto/auth-forget.dto';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { AuthLoginDTO } from './dto/auth-login.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { AuthResetDTO } from './dto/auth-reset.dto';
export declare class AuthController {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    login({ email, password }: AuthLoginDTO): Promise<{
        accessToken: string;
    }>;
    register(body: AuthRegisterDTO): Promise<{
        accessToken: string;
    }>;
    forget({ email }: AuthForgetDTO): Promise<boolean>;
    reset({ password, token }: AuthResetDTO): Promise<{
        accessToken: string;
    }>;
    check(user: any): Promise<{
        user: any;
    }>;
}
