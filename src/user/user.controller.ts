import { Controller, Post, Body, Param, Get, Put, Patch } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() user) {
    return { user };
  }

  @Get()
  async list() {
    return { users: [] };
  }

  @Get(':id')
  async search(@Param() params) {
    return { users: {}, params };
  }

  @Put(':id')
  async update(@Body() user, @Param() params) {
    return {
      method: 'PUT',
      user,
      params,
    };
  }

  @Patch(':id')
  async updatePartial(@Body() user, @Param() params) {
    return {
      method: 'PATCH',
      user,
      params,
    };
  }
}
