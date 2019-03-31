import { ObjectId } from 'mongodb';
import { Controller, Body, Param, Get, Post, Patch, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { TagInterface } from '@modules/tags/interfaces/tag.interface';
import { TagsService } from '@modules/tags/tags.service';

@Controller('tags')
export class TagsController {
  constructor (private readonly tagsService: TagsService) {}

  @Get()
  async findAll (): Promise<TagInterface[]> {
    return await this.tagsService.findAll();
  }

  @Get(':id')
  async findOne (@Param('id') id: string): Promise<TagInterface> {
    return await this.tagsService.findOne(id);
  }

  @Post()
  async create (@Body() postData): Promise<any> {
    return await this.tagsService.create(postData);
  }

  @Patch(':id')
  async updateOneById (@Param('id') id: string, @Body() updates: object): Promise<TagInterface> {
    /** Validate Request post ID */
    if (!ObjectId.isValid(id)) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
    return await this.tagsService.updateOneById(id, updates);
  }

  @Delete(':id')
  async deleteOne (@Param('id') id: string): Promise<TagInterface> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
    return await this.tagsService.deleteOne(id);
  }
}
