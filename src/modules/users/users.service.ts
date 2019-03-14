import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserInterface } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor (@InjectModel('User') private readonly userModel: Model<UserInterface>) {}

  async create (userData: UserInterface): Promise<UserInterface> {
    const createdUser = new this.userModel(userData);
    return await createdUser.save();
  }

  async findAll (): Promise<UserInterface[]> {
    return await this.userModel.find().exec();
  }
}
