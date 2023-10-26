import { Controller, Post, Body, Param, Get, Put, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() user: CreateUserDTO) {
    return { user };
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
      params,
    };
  }

  @Patch(':id')
  async updatePartial(@Body() user: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number) {
    return {
      method: 'PATCH',
      user,
      params,
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
