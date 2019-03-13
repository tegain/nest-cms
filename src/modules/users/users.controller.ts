import { Controller, Get, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll (@Query() query) {
    return 'List all users';
  }
}
