import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserInterface } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor (@InjectModel('User') private readonly userModel: Model<UserInterface>) {}

  async create (userData: UserInterface): Promise<UserInterface> {
    const createdUser = new this.userModel(userData);

    try {
      return await createdUser.save();
    } catch (e) {
      let errorMessage = e.message;

      /**
       * Create custom error message:
       * for each error caught, return a new object
       * { label: string, message: string }
       */
      if (e.errors) {
        errorMessage = [];
        for (const err of Object.keys(e.errors)) {
          errorMessage.push({ target: err, message: e.errors[err].message });
        }
      }

      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: errorMessage,
        },
        400,
      );
    }
  }

  async findAll (): Promise<UserInterface[]> {
    return await this.userModel.find().exec();
  }

  async updateOneById (userId: string | ObjectId, updates: object): Promise<UserInterface> {
    return await this.userModel
      .findOneAndUpdate(
        { _id: new ObjectId(userId) },
        { $set: updates },
        {
          new: true,
          runValidators: false,
          context: 'query',
        },
      )
      .exec();
  }
}
