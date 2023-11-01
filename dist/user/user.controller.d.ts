import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(user: CreateUserDTO): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    list(): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    search(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateAll(user: UpdatePutUserDTO, id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updatePartial(user: UpdatePatchUserDTO, id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
