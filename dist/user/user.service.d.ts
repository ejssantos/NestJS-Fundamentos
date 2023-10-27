import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserDTO): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
