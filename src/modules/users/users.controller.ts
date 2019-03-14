import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Patch,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { UsersService } from './users.service';
import { UserInterface } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor (private readonly userService: UsersService) {}

  @Post()
  async create (@Body() userData: UserInterface) {
    await this.userService.create(userData);
  }

  @Patch(':id')
  async updateOneById (@Param('id') id, @Body() updates: object) {
    /** Validate Request user ID */
    if (!ObjectId.isValid(id)) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return await this.userService.updateOneById(id, updates);
  }

  @Get()
  async findAll (): Promise<UserInterface[]> {
    return await this.userService.findAll();
  }
}
