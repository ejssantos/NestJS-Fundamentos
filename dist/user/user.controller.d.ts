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
        createdAt: Date;
        updatedAt: Date;
    }>;
    list(): Promise<{
        users: any[];
    }>;
    search(id: number): Promise<{
        users: {};
        id: number;
    }>;
    update(user: UpdatePutUserDTO, id: number): Promise<{
        method: string;
        user: UpdatePutUserDTO;
        id: number;
    }>;
    updatePartial(user: UpdatePatchUserDTO, id: number): Promise<{
        method: string;
        user: UpdatePatchUserDTO;
        id: number;
    }>;
    delete(id: number): Promise<{
        id: number;
    }>;
}
