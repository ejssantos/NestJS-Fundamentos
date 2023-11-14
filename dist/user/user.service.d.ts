import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserDTO): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        role: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    list(): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        role: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    search(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        role: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateAll(id: number, { name, email, password, birthAt, role }: UpdatePutUserDTO): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        role: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updatePartial(id: number, { name, email, password, birthAt, role }: UpdatePatchUserDTO): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        role: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        role: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    exists(id: number): Promise<void>;
}
