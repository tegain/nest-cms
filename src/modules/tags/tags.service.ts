import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TagInterface } from '@modules/tags/interfaces/tag.interface';

@Injectable()
export class TagsService {
  constructor (@InjectModel('Tag') private readonly tagModel: Model<TagInterface>) {}

  async create (data: TagInterface): Promise<TagInterface> {
    const tag = new this.tagModel(data);

    try {
      return await tag.save();
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

  async findAll (): Promise<TagInterface[]> {
    return await this.tagModel.find().exec();
  }

  async findOne (id: string | ObjectId): Promise<TagInterface> {
    return await this.tagModel.findOne({ _id: id }).exec();
  }

  async updateOneById (id: string | ObjectId, updates: object): Promise<TagInterface> {
    return await this.tagModel.findByIdAndUpdate(
      { _id: id },
      { $set: updates },
      {
        new: true,
        runValidators: true,
        context: 'query',
      },
    ).exec();
  }

  async deleteOne (id: string | ObjectId): Promise<TagInterface> {
    return await this.tagModel.findOneAndDelete({ _id: id }).exec();
  }
}
