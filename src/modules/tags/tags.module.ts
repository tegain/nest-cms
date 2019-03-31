import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { TagSchema } from './schemas/tag.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Tag', schema: TagSchema },
    ]),
  ],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
