import { Controller, Body, Param, Get, Post, Patch, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { PostInterface } from './interfaces/post.interface';
import { PostsService } from '@modules/posts/posts.service';
import { ObjectId } from 'mongodb';

@Controller('posts')
export class PostsController {
  constructor (private readonly postsService: PostsService) {}

  @Get()
  async findAll (): Promise<PostInterface[]> {
    return await this.postsService.findAll();
  }

  @Get(':id')
  async findOne (@Param('id') id: string): Promise<PostInterface> {
    return await this.postsService.findOne(id);
  }

  @Post()
  async create (@Body() postData): Promise<any> {
    return await this.postsService.create(postData);
  }

  @Patch(':id')
  async updateOneById (@Param('id') id: string, @Body() updates: object): Promise<PostInterface> {
    /** Validate Request post ID */
    if (!ObjectId.isValid(id)) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
    return await this.postsService.updateOneById(id, updates);
  }

  @Delete(':id')
  async deleteOne (@Param('id') id: string): Promise<PostInterface> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
    return await this.postsService.deleteOne(id);
  }
}
