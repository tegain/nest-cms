import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserInterface } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor (private readonly userService: UsersService) {}

  @Post()
  async create (@Body() userData: UserInterface) {
    await this.userService.create(userData);
  }

  @Get()
  async findAll (): Promise<UserInterface[]> {
    return await this.userService.findAll();
  }
}
