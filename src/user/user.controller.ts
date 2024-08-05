import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-fake')
  async createFakeUsers() {
    await this.userService.createFakeUsers(10); 
    return '10 usuários fictícios criados!';
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }
}
