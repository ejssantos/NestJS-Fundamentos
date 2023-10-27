import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  
  //"email: email", essa anotação será aplicada caso eu declare uma variável com
  //nome diferente da do parâmetro. Por exemplo: senha: password.
  
  //async create({ name, email, password }: CreateUserDTO) {
    //Toda vez que seu retorno (return) for uma promise, o uso do await será automático
    //e portanto não precisa declará-lo.
    //return await this.prisma.user.create({

    // return this.prisma.user.create({
    //   data: {
    //     name,
    //     email: email,
    //     password,
    //   },
    //   select: {
    //     id: true,
    //     name: true,
    //   }
    // });

    //OU...
    async create(data: CreateUserDTO) {
      return this.prisma.user.create({ data });
    }
  }

  // async list() {
  //   return this.prisma.user.findMany();
  //   //Ou...
  //   // return this.prisma.user.findMany({
  //   //   where: {
  //   //     email: {
  //   //       contains: '@hotmail.com',
  //   //     }
  //   //   }
  //   // });
  // }
