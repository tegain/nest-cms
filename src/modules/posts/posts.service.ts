import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PostInterface } from '@modules/posts/interfaces/post.interface';

@Injectable()
export class PostsService {
  constructor (@InjectModel('Post') private readonly postModel: Model<PostInterface>) {}

  async create (postData: PostInterface): Promise<PostInterface> {
    const post = new this.postModel(postData);

    try {
      return await post.save();
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

  async findAll (): Promise<PostInterface[]> {
    return await this.postModel.find().sort({ publishedAt: -1 }).exec();
  }

  async findOne (id: string | ObjectId): Promise<PostInterface> {
    return await this.postModel.findOne({ _id: id }).exec();
  }

  async updateOneById (id: string | ObjectId, updates: object): Promise<PostInterface> {
    return await this.postModel.findByIdAndUpdate(
      { _id: id },
      { $set: updates },
      {
        new: true,
        runValidators: true,
        context: 'query',
      },
    ).exec();
  }

  async deleteOne (id: string | ObjectId): Promise<PostInterface> {
    return await this.postModel.findOneAndDelete({ _id: id }).exec();
  }
}
