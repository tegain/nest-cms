import { Controller, Body, Param, Get, Post, Patch } from '@nestjs/common';
import { PostInterface } from './interfaces/post.interface';
import { PostsService } from '@modules/posts/posts.service';

@Controller('posts')
export class PostsController {
  constructor (private readonly postsService: PostsService) {}

  @Get()
  async findAll (): Promise<PostInterface[]> {
    return await this.postsService.findAll();
  }

  @Post()
  async create (@Body() postData): Promise<any> {
    return await this.postsService.create(postData);
  }

  @Patch(':id')
  async updateOneById (@Param('id') id: string, @Body() updates: object): Promise<PostInterface> {
    return await this.postsService.updateOneById(id, updates);
  }
}
