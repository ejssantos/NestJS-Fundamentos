/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Param, Get, Put, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() user: CreateUserDTO) {
    return this.userService.create(user);
  }

  @Get()
  async list() {
    return { users: [] };
  }

  /*
  @Get(':id')
  async search(@Param() params) {
    return { users: {}, params };
  }
  */
  @Get(':id')
  async search(@Param('id', ParseIntPipe) id: number) {
    return { users: {}, id };
  }

  /*
  @Put(':id')
  async update(@Body() user: UpdatePutUserDTO, @Param() params) {
    return {
      method: 'PUT',
      user,
      params,
    };
  }
  
  //Ou...

  async update(@Body() {name, email, password}: UpdatePutUserDTO, @Param() params) {
    return {
      method: 'PUT',
      name, email, password,
      params,
    };
  }*/
  @Put(':id')
  async update(@Body() user: UpdatePutUserDTO, @Param('id', ParseIntPipe) id: number) {
    return {
      method: 'PUT',
      user,
      id,
    };
  }

  @Patch(':id')
  async updatePartial(@Body() user: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number) {
    return {
      method: 'PATCH',
      user,
      id,
    };
  }

  /*
  @Delete(':id')
  async delete(@Param() params) {
    return { params }
  }
  Ou...
  */
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return { id }
  }
}
