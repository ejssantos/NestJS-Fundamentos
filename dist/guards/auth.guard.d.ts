import { CanActivate, ExecutionContext } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";
export declare class AuthGuard implements CanActivate {
    private readonly authService;
    constructor(authService: AuthService);
    canActivate(context: ExecutionContext): boolean;
}
