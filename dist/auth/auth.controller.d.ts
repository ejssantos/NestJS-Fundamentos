/// <reference types="multer" />
/// <reference types="express-serve-static-core" />
import { AuthForgetDTO } from './dto/auth-forget.dto';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { AuthLoginDTO } from './dto/auth-login.dto';
import { AuthService } from './auth.service';
import { AuthResetDTO } from './dto/auth-reset.dto';
import { FileService } from 'src/file/file.service';
export declare class AuthController {
    private readonly authService;
    private readonly fileService;
    constructor(authService: AuthService, fileService: FileService);
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
    uploadPhoto(user: any, photo: Express.Multer.File): Promise<{
        success: boolean;
    }>;
    uploadFiles(files: Express.Multer.File[]): Promise<Express.Multer.File[]>;
    uploadFilesFields(files: {
        photo: Express.Multer.File;
        documents: Express.Multer.File[];
    }): Promise<{
        photo: Express.Multer.File;
        documents: Express.Multer.File[];
    }>;
}
