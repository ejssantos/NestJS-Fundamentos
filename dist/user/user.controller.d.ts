import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
export declare class UserController {
    create(user: CreateUserDTO): Promise<{
        user: CreateUserDTO;
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
